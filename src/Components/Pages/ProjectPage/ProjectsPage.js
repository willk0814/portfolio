import React from 'react'

// import framer motion
import { motion } from 'framer-motion'

// Import data and project tile component
import { data } from '../../../assets/projectData'
import ProjectTile from './ProjectTile'

// React Icons
import { HiMiniSquare2Stack, HiMiniSquares2X2 } from "react-icons/hi2";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function ProjectsPage() {

  return (
    <div className='pageContainer' name='projects'>
        <motion.div 
          className='text-white text-8xl mb-4'
          initial = {{ opacity: 0, y: '-2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          <h1>Projects</h1>

          <div className='flex flex-row space-x-4 justify-center my-2'>
            {/* Change size */}
            <div className='blurredContentContainer flex-row p-2 space-x-2'>
              <HiMiniSquare2Stack size={35}/>
              <HiMiniSquares2X2 size={35}/>
            </div>

            {/* Filter by language or technology */}
            <div className='blurredContentContainer flex-row p-2 space-x-2'>
              <SiPython size={35}/>
              <IoLogoJavascript size={35}/>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className='flex flex-wrap justify-center items-center'
          initial = {{ opacity: 0, y: '2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          {Object.keys(data).map((card_id, i) => {
            let card = data[card_id]
            return (
              <ProjectTile
                key = {i}
                card = {card} />
            )
          })}
        </motion.div>
    </div>
  )
}
