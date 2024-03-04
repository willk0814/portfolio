import React from 'react'

// Framer motion import
import { motion, AnimatePresence } from 'framer-motion'

// Youtube import
import Youtube from 'react-youtube'

// Import Github Icon
import { AiFillGithub } from 'react-icons/ai'
import { FaExternalLinkAlt } from "react-icons/fa";

// Import Created Technology Stack Component
import TechnologyBar from './TechnologyBar'

// Import defined variants 
import { overlayVariants, containerVariants, 
  imageVariants, smImageVariants, 
  contentVariants, spanVariants } from './variants';

// Import playeropts
import { smPlayerOpts, mdPlayerOpts, lgPlayerOpts} from './variants'


export default function ExpandedProjectTile({ project_id, project_data, selectCard, playerSize }) {

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
            className='fixed inset-0 w-[100vw] h-[100vh] z-10 flex items-center justify-center p-5'
            >

            {/* Card Container */}
            <motion.div
              key='focusedView'
              variants={containerVariants}
              className={
                `${playerSize === 'sm' ?
                  'flex flex-col space-y-4 items-center' : 
                  'flex flex-row space-x-4'} 
                 bg-[#323330] z-20 opacity-100 max-w-fit h-fit rounded-lg p-4`}>
                
                {/* Video Container */}
                {project_data.video_idd !== '' &&
                  <motion.div
                    variants={playerSize === 'sm' ? smImageVariants : imageVariants}
                    className='w-fit rounded-lg flex items-center justify-center bg-black'>
                    {project_data.video_id !== '' && 
                      <>
                        {playerSize === 'sm' &&
                          <Youtube 
                            style={{ borderRadius: '15px', overflow: 'hidden'}}
                            videoId={project_data.video_id} 
                            opts={smPlayerOpts}/>}
                        
                        {playerSize === 'md' &&
                          <Youtube 
                            style={{ borderRadius: '15px', overflow: 'hidden'}}
                            videoId={project_data.video_id} 
                            opts={mdPlayerOpts}/>}

                        {playerSize === 'full' &&
                          <Youtube 
                            style={{ borderRadius: '15px', overflow: 'hidden'}}
                            videoId={project_data.video_id} 
                            opts={lgPlayerOpts}/>}
                      </>}
                  </motion.div>
                }

                {/* Details Container */}
                <motion.div 
                  className='flex flex-col max-w-[300px] w-fit'>

                  {/* Title */}
                  <motion.div
                    variants={contentVariants}
                    className='mb-1'>
                      <motion.h1 
                        className={`text-white ${playerSize === 'sm' ? 'text-2xl':'text-5xl'}`}>{project_data.title}</motion.h1>
                  </motion.div>

                  <motion.span 
                    variants={spanVariants} 
                    className='w-[90%] h-[1px] bg-white mb-3'></motion.span>

                  {/* Buttons */}
                  <motion.div
                    variants={contentVariants}
                    className='flex flex-row space-x-2 mb-1'>
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
                  <motion.span 
                    variants={spanVariants} 
                    className='w-[90%] h-[1px] bg-white mb-3'></motion.span>

                  {/* Technology Stack */}
                  <motion.div variants={contentVariants}>
                    <TechnologyBar 
                      stack = {project_data.stack} 
                      full={true}/>
                  </motion.div>

                  <motion.span 
                    variants={spanVariants} 
                    className='w-[90%] h-[1px] bg-white mb-3'></motion.span>

                  {/* Content */}
                  <motion.div 
                    variants={contentVariants}
                    className={`text-white ${playerSize === 'sm' ? 'text-lg':'text-xl'}`}>
                      {project_data.content}
                  </motion.div>

                </motion.div>
            </motion.div>
          
          </motion.div>
    </AnimatePresence>
  )
}
