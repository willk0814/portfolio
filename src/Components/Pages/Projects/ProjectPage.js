import React, { useState, useEffect } from 'react'

// Import data from assets
import { data } from '../../../assets/projectData'

// Import framer motion for render animations
import { motion } from 'framer-motion'

// Import project tile component
import ExpandedProjectTile from './ExpandedProjectTile'
import CollapsedProjectTile from './CollapsedProjectTile'

// Import Icons
import { HiSquares2X2 } from "react-icons/hi2";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import { FaReact } from 'react-icons/fa'
import { SiPython } from 'react-icons/si'
import { IoLogoJavascript } from "react-icons/io5";
import { TbRuler2Off } from 'react-icons/tb'


export default function ProjectPage() {

  const [selectedId, setSelectedId] = useState('')
  const [playerSize, setPlayerSize] = useState('')

  const [cardSize, setCardSize] = useState('sm')
  const [filterSettings, setFilterSettings] = useState({
    React: true,
    Python: true,
    JS: true
  })

  const handleSetCardSize = (size) => {
    setCardSize(size)
  }

  const handleChangeFilter = (filter) => {
    setFilterSettings(prevState => {
      return {
        ...prevState,
        [filter]: !prevState[filter] // Toggle the value of the specified filter
      };
    });
  }

  const handleSelectCard = (project_id) => {
    if (selectedId === project_id){
      setSelectedId('')
    } else {
      setSelectedId(project_id)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth > 1005){
        setPlayerSize('full')
      } else if (screenWidth <= 1005 && screenWidth > 600) {
        setPlayerSize('md')
      } else {
        setPlayerSize('sm')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='pageContainer'>
      
      {/* Page Content Container */}
      <div className='flex flex-col items-center justify-center w-[80vw]'>

        {/* Title */}
        <motion.h1 
          initial = {{ opacity: 0, y: '-2rem'}}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}
          className='text-white text-8xl'>
            Projects
        </motion.h1>

        {/* Viewing Controls Container */}
        <motion.div 
          className='flex flex-row space-x-2 items-center justify-center border-white mt-2'
          initial = {{ opacity: 0, y: '-2rem'}}
          animate = {{ opacity: 1, y: 0}}
          transition = {{ duration: 0.5 }}>
            {/* Size Control */}
            <div className='flex flex-row blurredContentContainer'>
              <div 
                className={`${cardSize === 'sm' ? 'bg-black' : ''} p-2 px-4 cursor-pointer`}
                onClick={() => handleSetCardSize('sm')}>
                <HiSquares2X2 color='white' size={35} />
              </div>

              <div 
                className={`${cardSize === 'lg' ? 'bg-black' : ''} p-2 px-4 cursor-pointer`}
                onClick={() => handleSetCardSize('lg')}>
                <PiSquareSplitHorizontalFill color='white' size={35} />
              </div>
            </div>

            {/* Language Filter */}
            <div className='flex flex-row blurredContentContainer'>
              <div 
                className={`${filterSettings['React'] ? 'bg-black' : ''} p-2 px-4 cursor-pointer`}
                onClick={() => handleChangeFilter('React')}>
                <FaReact color='white' size={35} />
              </div>

              <div 
                className={`${filterSettings['Python'] ? 'bg-black' : ''} p-2 px-4 cursor-pointer`}
                onClick={() => handleChangeFilter('Python')}>
                <SiPython color='white' size={35} />
              </div>

              <div 
                className={`${filterSettings['JS'] ? 'bg-black' : ''} p-2 px-4 cursor-pointer`}
                onClick={() => handleChangeFilter('JS')}>
                <IoLogoJavascript color='white' size={35} />
              </div>
            </div>
        </motion.div>

        {/* Project Tiles */}
        <motion.div
          initial = {{ opacity: 0, y: '2rem'}}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}
          className='flex flex-wrap justify-center mt-4'>
            
              {Object.keys(data).map((card_id, ind) => {
                let card_data = data[card_id]
                let jsxElements = []
                
                for (const tech of card_data.stack) {
                  if (filterSettings[tech]) {
                    jsxElements.push(
                      <CollapsedProjectTile 
                        key = {ind} 
                        project_id = {card_id}
                        project_data = {card_data}
                        selectCard = {handleSelectCard}
                        cardSize = {cardSize} />
                      )
                    break
                    }
                  }
                return jsxElements
                })}
        </motion.div>

        {/* Dimming Layer */}
        {selectedId !== '' && 
          <ExpandedProjectTile 
            project_id = {selectedId} 
            project_data = {data[selectedId]}
            selectCard = {handleSelectCard}
            playerSize = {playerSize} />
          }
      </div>
      
    </div>
  )
}
