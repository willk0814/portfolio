import React from 'react'

import { motion } from 'framer-motion'

export default function CollapsedProjectTile({ project_id, project_data, selectCard }) {
  return (
    <motion.div 
      whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}
      className='blurredContentContainer items-start justify-end h-[30vh] w-[20vw] min-w-[300px] m-2 p-2 cursor-pointer'
      onClick={() => selectCard(project_id)}>
      <h1 className='text-white text-4xl'>{project_data.title}</h1>
    </motion.div>
  )
}
