import React from 'react'

import { AiFillGithub } from 'react-icons/ai'

import TechnologyBar from '../ProjectPage/TechnologyBar'

export default function ProjectTile2({ card }) {

  return (
    <div 
        className='blurredContentContainer max-w-[385px] w-[40vw] min-w-[350px] h-[25vh] min-h-[350px] p-4 m-2 flex flex-col items-start justify-between'>
        
        <div className='flex w-[100%] justify-between items-start mb-4'>
            <div>
                <h1 className='text-white text-4xl font-bold mb-2'>{card.title}</h1>
            </div>
            <div className='flex flex-row '>
                {card.git_link !== '' && 
                    <div className='bg-white rounded-md mx-1'>
                        <a href = {card.git_link} target = '_blank' rel = 'noreferrer'
                            className='cursor-pointer'>
                            <AiFillGithub 
                                color = '#2A2A2A'
                                size = {55} />
                        </a>
                    </div>}

                {card.demo_link !== '' && 
                    <div className='bg-white rounded-md mx-1 flex items-center px-1'>
                        <a href = {card.demo_link} target = '_blank' rel = 'noreferrer'
                            className='py-2 font-bold cursor-pointer'>
                            Demo
                        </a>
                    </div>}
            </div>
        </div>
        
        <div>
            <TechnologyBar stack = {card.stack} />
            <h1 className='text-white'>
                {card.content}
            </h1>
        </div>
        
    </div>
  )
}
