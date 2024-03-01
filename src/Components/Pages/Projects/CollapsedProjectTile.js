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
      <h1 className={`text-white ${cardSize === 'sm' ? 'text-4xl' : 'text-[3.5rem] leading-[3.5rem] font-semibold'}`}>{project_data.title}</h1>
    </motion.div>
  )
}
