import React from 'react'

import './Projects.css'

import { motion } from 'framer-motion'

export default function ProjectTile({ card_id, isSelected, title, content, handleClick }) {
  return (
    <motion.div 
        className={isSelected ? 'opened-card' : 'card' }
        layout
        layoutId = {`card-container-${card_id}`}
        onClick={() => handleClick(card_id)}>
        <motion.div
            className='title-container'
            layoutId = {`title-container-${card_id}`}>
            <h2 className='text-3xl font-bold text-white'>{title}</h2>
        </motion.div>
        {isSelected && (
            <motion.div>
                <h2 className='text-white text-3xl font-bold'>{content}</h2>
            </motion.div>
        )}
        
        </motion.div>   
  )
}
