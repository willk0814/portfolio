import React from 'react'

import { motion } from 'framer-motion'

export default function ExpandedProjectTile({ project_id, project_data, selectCard }) {
  return (
    <motion.div
      className='fixed w-[50vw] h-[40vw] z-10 bg-black'
      onClick = {() => selectCard(project_id)}>
      <h1 className='text-white text-4xl'>Hello World</h1>
    </motion.div>
  )
}
