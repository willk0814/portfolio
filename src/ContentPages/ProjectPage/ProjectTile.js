import React from 'react'

import './Projects.css'
import TechnologyBar from './TechnologyBar'

import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'

export default function ProjectTile({ card_id, isSelected, title, content, handleClick, gitLink, stack }) {
  return (
    <motion.div 
        className={isSelected ? 'opened-card' : 'card' }
        animate
        layoutId = {`card-container-${card_id}`}
        onClick={() => handleClick(card_id)}>
        <motion.div
            className='title-container'
            layoutId = {`title-container-${card_id}`}>
            <h2 className='text-3xl font-bold text-white'>{title}</h2>
        </motion.div>
        {isSelected && (
            <motion.div>
                <div>
                    {gitLink !== '' &&
                        <div
                            className='flex w-fit justify-start'> 
                            <a href = {gitLink} target='_blank' rel='noreferrer'>
                                <AiFillGithub 
                                    color='#2A2A2A' 
                                    size={55} 
                                    className='mb-3 border-2 border-white rounded-md bg-white' />
                            </a>
                        </div>
                    }
                    <TechnologyBar stack = {stack} />
                    <h2 className='text-white text-lg font-semibold'>{content}</h2>
                </div>
            </motion.div>
        )}
        
        </motion.div>   
  )
}
