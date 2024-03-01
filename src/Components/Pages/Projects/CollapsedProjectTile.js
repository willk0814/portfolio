import React from 'react'

import { motion } from 'framer-motion'

export default function CollapsedProjectTile({ project_id, project_data, selectCard, cardSize }) {
  return (
    <motion.div 
      className={`blurredContentContainer items-start justify-end m-2 p-4 cursor-pointer 
        ${cardSize === 'sm' ? 'w-[200px] h-[200px]' : 'w-[300px] h-[400px]'}`}
      whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}
      onClick = {() => selectCard(project_id)}>
  
      {/* Project Title */}
      <h1 className='text-white text-4xl'>{project_data.title}</h1>
    </motion.div>
  )
}
