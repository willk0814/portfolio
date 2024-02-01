import React, { useState } from 'react';

import { data } from '../../assets/projectData'
import './Projects.css'
import ProjectTile from './ProjectTile';

import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectList() {

  const [selectedId, setSelectedId] = useState(null)

  const handleClick = (id) => {
    if (selectedId === null) {
        setSelectedId(id)
    } else {
        setSelectedId(null)
    }
  }

  return (
    <div className='pageContainer' name='projects'>
        <h1 className='text-8xl text-white my-8'>Projects</h1>
        <AnimatePresence>
            <div className="layout-cards">
            
                {Object.keys(data).map((card_id, i) => {
                    let card = data[card_id]
                    return (

                        <ProjectTile
                            key = {i}
                            card_id = {card_id}
                            isSelected = {card_id === selectedId}
                            title = {card.title} 
                            content = {card.content} 
                            handleClick = {handleClick}
                            gitLink = {card.repo_link}
                            demoLink = {card.demo_link}
                            stack = {card.stack} />
                )})}

                <motion.div 
                    className="dim-layer" 
                    animate={{ opacity: selectedId ? .7 : 0 }}
                    onClick={() => handleClick(null)} />
            </div>
        </AnimatePresence>
    </div>
  );
}
