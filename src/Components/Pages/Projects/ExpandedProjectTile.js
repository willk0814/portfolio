import React, {useEffect} from 'react'

// Framer motion import
import { motion, AnimatePresence } from 'framer-motion'

// Youtube import
import Youtube from 'react-youtube'

// Import Github Icon
import { AiFillGithub } from 'react-icons/ai'
import { FaExternalLinkAlt } from "react-icons/fa";

// Import Created Technology Stack Component
import TechnologyBar from './TechnologyBar'

export default function ExpandedProjectTile({ project_id, project_data, selectCard }) {

  const overlayVariants = {
    open: {
      background: 'rgba(0, 0, 0, 0.7)',
      transition: {
        duration: 0.25,
        when: 'beforeChildren'
      }
    },
    closed: {
      background: 'rgba(0, 0, 0, 0)',
      transition: {
        duration: 0.25,
        when: 'afterChildren'
      }
    }}

  const containerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      y: '-2rem',
      transition: {
        duration: 0.25
      }
    }
  }

  const imageVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      x: '-2rem',
      opacity: 0,
      transition: {

      }
    }
  }

  const contentVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      x: '2rem',
      transition: {
        duration: 0.25
      }
    }
  }

  let path = '../../../'

  return (
    <AnimatePresence>
          {/* Dimming Layer */}
          <motion.div
            key='focusedView'
            variants={overlayVariants}
            initial='closed'
            animate='open'
            exit='closed'
            onClick= {() => selectCard(project_id)}
            className='fixed inset-0 w-[100vw] h-[100vh] z-10 flex items-center justify-center'
            >

            {/* Card Container */}
            <motion.div
              key='focusedView'
              variants={containerVariants}
              className='bg-[#5b6057] z-20 flex flex-row opacity-100 min-w-[300px] w-[65vw] h-[600px] rounded-lg p-8 space-x-4'>
                
                {/* Image Container */}
                <motion.div
                  variants={imageVariants}
                  className='w-2/3 h-[100%] bg-black rounded-md flex items-center justify-center'>
                  {project_data.video_id && 
                    <Youtube 
                      videoId={project_data.video_id} 
                      opts={{
                        playerVars: {
                         autoplay: 1
                        }
                      }}/>}
                </motion.div>

                {/* Details Container */}
                <motion.div 
                  className='flex flex-col w-1/3 space-y-4'>

                  {/* Title */}
                  <motion.div
                    variants={contentVariants}>
                      <motion.h1 className='text-white text-5xl'>{project_data.title}</motion.h1>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    variants={contentVariants}
                    className='flex flex-row space-x-2'>
                      {/* Github Link */}
                      <motion.a
                        href={project_data.repo_link}
                        target='_blank'
                        rel='noreferrer'
                        className='blurredContentContainer cursor-pointer flex flex-row items-center p-2'
                        whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
                        <AiFillGithub size={30} color='white'/>
                        <h1 className='text-white text-xl ml-2'>Repo</h1>
                      </motion.a>

                      {/* Demo Link */}
                      {project_data.demo_link !== '' &&
                        <motion.a
                          href={project_data.demo_link}
                          target='_blank'
                          rel='noreferrer'
                          className='blurredContentContainer cursor-pointer flex flex-row items-center p-2'
                          whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
                          <FaExternalLinkAlt size={30} color='white'/>
                          <h1 className='text-white text-xl ml-2'>Demo</h1>
                        </motion.a>
                       }
                  </motion.div>

                  {/* Technology Stack */}
                  <motion.div variants={contentVariants}>
                    <TechnologyBar stack = {project_data.stack} />
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    variants={contentVariants}
                    className='text-white text-xl'>
                      {project_data.content}
                  </motion.div>

                </motion.div>
            </motion.div>
          
          </motion.div>
    </AnimatePresence>
  )
}
