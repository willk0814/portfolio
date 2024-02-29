import React from 'react'

import { motion } from 'framer-motion'

export default function CollapsedProjectTile({ project_id, project_data, selectCard }) {
  return (
    <motion.div 
      className='blurredContentContainer items-start justify-end m-2 p-4 w-[300px] h-[200px] cursor-pointer'
      whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}
      onClick = {() => selectCard(project_id)}>
      
      {/* Project Title */}
      <h1 className='text-white text-4xl'>{project_data.title}</h1>
    </motion.div>
  )
}
