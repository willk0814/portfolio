import React from 'react'

import { motion } from 'framer-motion'
import TechnologyBar from './TechnologyBar'

export default function CollapsedProjectTile({ project_id, project_data, selectCard, cardSize }) {
  return (
    <motion.div 
      className={`blurredContentContainer items-start justify-end m-2 p-4 cursor-pointer 
        ${cardSize === 'sm' ? 'w-[150px] md:w-[225px] justify-end' : 'w-[300px] h-[400px] justify-between'}`}
      whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}
      onClick = {() => selectCard(project_id)}> 

        {/* Project Title */}
        <h1 
          className={`text-white ${cardSize === 'sm' ? 'text-2xl md:text-4xl' : 'text-[3.5rem] leading-[3.5rem] font-semibold'}`}>
            {project_data.title}
        </h1>

        {cardSize === 'lg' && 
          <div className='flex flex-col items-start'>
            <TechnologyBar stack={project_data.stack}/>
              <h1 className='text-white text-xl'>
                {project_data.content.length > 100 ? 
                  project_data.content.slice(0, 100) + '...'
                    : 
                  project_data.content
                }
              </h1>
          
        </div>}
    </motion.div>
  )
}
