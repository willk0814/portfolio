import React from 'react'

// import framer motion
import { motion } from 'framer-motion'

export default function EducationPage() {
  return (
    <div className='pageContainer' name='education'>
        <motion.h1 
          className='text-white text-6xl md:text-8xl mb-4'
          initial = {{ opacity: 0, y: '-2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          Education
        </motion.h1>

        <motion.div 
          className='flex flex-wrap items-center justify-center'
          initial = {{ opacity: 0, y: '2rem' }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5 }}>
          <div className='blurredContentContainer m-2 p-4 max-w-[450px] w-[90vw] items-start justify-start'>
            <h1 className='text-white text-4xl'>Stevens</h1>
            <p className='text-white italic text-bold text-xl'>M.S. in Machine Learning</p>
            <ul className='pl-4 list-disc text-white'>
              <li>Expected Graduation date: December 2024</li>
              <li>Part time degree track that allows me to remain elligible for full-time work</li>
              <li>4.0 GPA through all completed courses</li>
            </ul>
          </div>

          <div className='blurredContentContainer m-2 p-4 max-w-[450px] w-[90vw] items-start justify-start'>
            <h1 className='text-white text-4xl'>University of Delaware</h1>
            <p className='text-white italic text-bold text-xl'>B.S. in Computer Science</p>
            <ul className='pl-4 list-disc text-white'>
              <li>Minor in CyberSecurity</li>
              <li>Concentrated degree in Artificial Intelligence & Machine Learning</li>
              <li>5 time Deans List honoree</li>
            </ul>
          </div>

        </motion.div>
    </div>
  )
}
