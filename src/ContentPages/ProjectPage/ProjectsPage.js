import React from 'react'

// Import data and project tile component
import { data } from '../../assets/projectData'
import ProjectTile from './ProjectTile'

export default function ProjectsPage() {

  return (
    <div className='pageContainer' name='projects'>
        <h1 className='text-white text-8xl mb-4'>Projects</h1>
        <div className='flex flex-wrap justify-center items-center'>
          {Object.keys(data).map((card_id, i) => {
            let card = data[card_id]
            return (
              <ProjectTile
                key = {i}
                card = {card} />
            )
          })}
        </div>
    </div>
  )
}
