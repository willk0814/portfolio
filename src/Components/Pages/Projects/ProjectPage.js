import React, { useState } from 'react'

// Import framer components
import { LayoutGroup, motion } from 'framer-motion'

// Import data from assets
import { data } from '../../../assets/projectData'

// Import project tile component
import ProjectTile from './CollapsedProjectTile'

export default function ProjectPage() {

  const [expanded, setExpanded] = useState('')

  return (
    <div className='pageContainer'>
      <div className='w-[80vw] flex items-center justify-center flex-col'>
        <h1 className='text-white text-8xl'>Projects</h1>
        <div className='my-4'>
          <LayoutGroup>
            <ul className='flex-wrap justify-center'>
            {Object.keys(data).map((card_id, i) => {
              let card_data = data[card_id]
              return (
                <li>
                  <ProjectTile project_data = {card_data} />
                </li>
              )
            })}

            </ul>
          </LayoutGroup>
        </div>
      </div>
    </div>
  )
}
