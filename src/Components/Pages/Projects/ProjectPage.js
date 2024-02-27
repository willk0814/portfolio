import React, { useState } from 'react'

// Import data from assets
import { data } from '../../../assets/projectData'

// Import framer motion for render animations
import { motion } from 'framer-motion'

// Import project tile component
import ExpandedProjectTile from './ExpandedProjectTile'
import CollapsedProjectTile from './CollapsedProjectTile'

export default function ProjectPage() {

  const [selectedId, setSelectedId] = useState('')

  const handleSelectCard = (project_id) => {
    if (selectedId === project_id){
      setSelectedId('')
    } else {
      setSelectedId(project_id)
    }
  }

  return (
    <div className='pageContainer'>
      
      {/* Title Container */}
      <motion.div
        initial={{ opacity: 0, y:'-2rem' }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5}}>
        <h1 className='text-white text-8xl'>Projects</h1>
      </motion.div>

      {/* List of Collapsed Project Tiles */}
      <motion.ul
        initial={{ opacity: 0, y:'2rem' }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5}}
        className='w-[85vw] flex justify-center mt-3'>
          <div className='flex flex-wrap'>
            {Object.keys(data).map((card_id, ind) => {
              let card = data[card_id]
              return (
                <CollapsedProjectTile
                  key = {ind}
                  project_id = {card_id}
                  project_data = {card}
                  selectCard = {handleSelectCard} />
              )
            })}
        </div>

      </motion.ul>

      {/* Expanded Project Tile */}
      {selectedId !== '' && 
        <ExpandedProjectTile 
          project_id = {selectedId}
          project_data = {data[selectedId]}
          selectCard = {handleSelectCard}/>
      }
    </div>
  )
}
