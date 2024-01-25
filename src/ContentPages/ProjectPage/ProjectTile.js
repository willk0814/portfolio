import React, { useState } from 'react';

// Framer motion import 
import { motion } from 'framer-motion'

// Stylesheet
import './Projects.css'

const cards = [1, 2, 3, 4, 5, 6]

export default function ProjectTile() {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className='pageContainer' name='projects'>
      <h1 className='text-white text-8xl'>Projects</h1>
        
        <div className="layout-cards">
          {cards.map((card, i) => (
              <motion.div 
                className={selectedId === card ? 'opened-card' : 'card' }
                key={i}
                layout
                onClick={selectedId === card ? () => setSelectedId(null) : () => setSelectedId(card)}>
                {selectedId === card && (
                  <>
                    <div />
                  </>
                )}
              </motion.div>
          ))}
        <motion.div 
          className="dim-layer" 
          animate={{ opacity: selectedId ? .5 : 0 }}
          onClick={() => setSelectedId(null)}
        />
      </div>

    </div>
  );
}
