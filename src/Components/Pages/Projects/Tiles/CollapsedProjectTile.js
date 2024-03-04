import React from 'react'

import { motion } from 'framer-motion'
import TechnologyBar from './TechnologyBar'

export default function CollapsedProjectTile({ project_id, project_data, selectCard, cardSize }) {
  return (
    <motion.div 
      className={`blurredContentContainer items-start justify-between m-2 p-4 cursor-pointer 
        ${cardSize === 'sm' ? 'w-[150px] md:w-[225px]' : 'w-[300px] h-[400px]'}`}
      whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}
      onClick = {() => selectCard(project_id)}> 

        {/* Project Title */}
        {cardSize === 'sm' ? ( 
          // For small cards only display the first 16 characters of the title
          <h1 
            className='text-white text-2xl md:text-4xl'>
              {project_data.title.length > 16 ? 
                  project_data.title.slice(0, 16) + '...'
                    : 
                  project_data.title
                }
          </h1>
        ) : (
          // For large cards display the entire title
          <h1 
            className='text-white text-[3.5rem] leading-[3.5rem] font-semibold'>
              {project_data.title}
          </h1>
        )}

        <div className='flex flex-col items-start'>
         
          {cardSize === 'sm' ? (
            <TechnologyBar 
              stack={project_data.stack} 
              full={false}/>
            ) : (
            <TechnologyBar 
              stack={project_data.stack} 
              full={true}/>
            )}
            
            {/* Only display description content on larger cards */}
            {cardSize === 'lg' && 
              <h1 className='text-white text-xl'>
                {project_data.content.length > 100 ? 
                  project_data.content.slice(0, 100) + '...'
                    : 
                  project_data.content
                }
              </h1>}
        </div>
    </motion.div>
  )
}
