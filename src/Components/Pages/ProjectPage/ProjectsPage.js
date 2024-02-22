import React from 'react'

// import framer motion
import { motion } from 'framer-motion'


// Import data and project tile component
import { data } from '../../../assets/projectData'
import ProjectTile from './ProjectTile'

export default function ProjectsPage() {

  return (
    <div className='pageContainer' name='projects'>
        <motion.h1 
          className='text-white text-8xl mb-4'
          initial = {{ opacity: 0, y: '-2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          Projects
        </motion.h1>
        <motion.div 
          className='flex flex-wrap justify-center items-center'
          initial = {{ opacity: 0, y: '2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          {Object.keys(data).map((card_id, i) => {
            let card = data[card_id]
            return (
              <ProjectTile
                key = {i}
                card = {card} />
            )
          })}
        </motion.div>
    </div>
  )
}
