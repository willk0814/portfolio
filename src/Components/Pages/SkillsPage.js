import React from 'react'

// Import framer motion
import { motion } from 'framer-motion'

// Import Skills data 
import { skillsData } from '../../assets/skillsData' 

export default function SkillsPage() {
  return (
    <div className='pageContainer justify-start' name='skills'>
        <div className='flex flex-col my-10 items-center justify-center max-w-[950px]'>
            <motion.h1 
                className='text-white text-8xl mb-3'
                initial = {{ opacity: 0, y: '-2rem' }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.5 }}>
                Skills
            </motion.h1>

            <motion.div 
                initial = {{ opacity: 0, y: '2rem' }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.5 }}
                className='flex flex-wrap justify-center max-w-[80vw]'>
                {Object.keys(skillsData).map((group, ind) => {
                    return (
                        <div 
                            className='blurredContentContainer flex-grow justify-start items-start min-h-[100%] w-[300px] p-2 m-1'
                            key={ind}>
                                <h1 className='text-white text-3xl font-bold'>{group}</h1>
                                <ul className='flex flex-col items-start list-disc pl-[18px]'>
                                {skillsData[group].map((skill, ind) => (
                                    <li 
                                        className='text-white text-xl'
                                        key={ind}>
                                            {skill}
                                    </li>
                                    ))} 
                                </ul>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    </div>
  )
}
