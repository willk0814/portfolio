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

        {/* Project Tiles */}
        <motion.div
          initial = {{ opacity: 0, y: '2rem'}}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}
          className='flex flex-wrap justify-center mt-4 border-2 border-white rounded-lg'>
            
              {Object.keys(data).map((card_id, ind) => {
                let card_data = data[card_id]
                return (
                  <CollapsedProjectTile 
                    key = {ind} 
                    project_id = {card_id}
                    project_data = {card_data}
                    selectCard = {handleSelectCard} />
                )
              })}
        </motion.div>

        {/* Dimming Layer */}
        {selectedId !== '' && 
          <ExpandedProjectTile 
            project_id = {selectedId} 
            project_data = {data[selectedId]}
            selectCard = {handleSelectCard} />
          }
      </div>
      
    </div>
  )
}
