import React from 'react'

// Import Framer Motion
import { motion } from 'framer-motion'

// Import Resume
import Koenig_Resume from '../../assets/Koenig_Resume.pdf'

// Import Icons for Links
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function TitlePage() {
  return (
    <div className='pageContainer' name='home'>

        {/* About Me */}
        <div className='flex flex-col w-[80vw] max-w-[900px] items-center justify-center'>

          {/* Name Title */}
          <motion.h1 
            className='text-white text-9xl mb-3 font-light text-center'
            initial = {{ opacity: 0, y: '-2rem' }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 1 }}>
              Will Koenig
          </motion.h1>

          <motion.div 
            className='blurredContentContainer'
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition = {{ duration: 1 }}>
            <p className='text-white text-2xl p-2'>
              Hi! My name is Will and I am a full stack Software Engineer with experience building dynamic web and mobile applications using JavaScript and React as well as implementing Machine Learning algorithms using Python.  I am interested in the applications of Machine Learning to so many of our daily tasks, how can we leverage data to learn more about seemingly mundane tasks?
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className = 'flex flex-row my-2 w-[100%] space-x-2 justify-center'
            initial = {{ opacity: 0, y: '2rem' }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 1 }}>
            <motion.a 
              className='blurredContentContainer w-1/3 flex justify-center py-1' 
              href='https://linkedin.com/in/will-koenig' 
              target='_blank'
              rel='noreferrer'
              whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
              <AiFillLinkedin className='cursor-pointer' size={70} color='white'/>
            </motion.a>
            <motion.a 
              className='blurredContentContainer w-1/3 flex justify-center py-1' 
              href='https://github.com/willk0814' 
              target='_blank'
              rel='noreferrer'
              whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
              <AiFillGithub className='cursor-pointer' size={70} color='white'/>
            </motion.a>
            <motion.a 
              className='blurredContentContainer w-1/3 flex justify-center py-1' 
              href={Koenig_Resume} 
              target='_blank'
              rel='noopener noreferrer'
              whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
              <HiOutlineDocumentText className='cursor-pointer' size={70} color='white'/>
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Arrow Down */}

    </div>
  )
}
