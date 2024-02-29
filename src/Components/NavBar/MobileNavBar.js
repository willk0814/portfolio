import React from 'react'

// Import framer-motion
import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion'

// Import links from react router
import { Link } from 'react-router-dom'

// React Icons 
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

// Resume Import
import Koenig_Resume from '../../assets/Koenig_Resume.pdf'

export default function MobileNavBar() {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)
  return (
    <div>
        <motion.button
            className='blurredContentContainer p-2 flex flex-col space-y-2 items-center justify-center cursor-pointer h-full relative z-10'
            onClick = {() => toggleMobileNav()}
            animate = {mobileNav ? 'open' : 'closed'}>
            <motion.span 
                className='w-5 h-[3px] bg-white rounded-md'
                variants = {{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 11 }
                }}>
            </motion.span>
            <motion.span 
                className='w-5 h-[3px] bg-white rounded-md'
                variants = {{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}>
            </motion.span>
            <motion.span 
                className='w-5 h-[3px] bg-white rounded-md'
                variants = {{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -11 }
                }}></motion.span>
        </motion.button>
        
        <AnimatePresence>
            {mobileNav && 
            <MotionConfig
                transition = {{ type: 'spring', bounce: 0.2 }}>
                <motion.div
                    key = 'mobile-nav'
                    variants = {{
                        open: {
                            x: 0,
                            transition: { 
                                when: 'beforeChildren',
                                type: 'spring',
                                bounce: 0.2 }},
                        closed: { 
                            x: '-100vw',
                            transition: { 
                                when: 'afterChildren',
                                type: 'spring',
                                bounce: 0.2 }}
                    }}
                    animate = 'open'
                    initial = 'closed'
                    exit = 'closed'
                    className='fixed flex flex-col justify-center inset-0 h-[100vh] w-[100vw] bg-[#5b6057] p-6'>
                    <motion.div
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
                        <ul className='space-y-6'>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/portfolio' onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Home</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/skills'  onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Skills</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/education' onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Education</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/experience' onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Experience</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/projects' onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Projects</h1>
                                </Link>
                            </motion.li>
                            {/* <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link to='/contact' onClick = {toggleMobileNav}>
                                    <h1 className='text-white text-5xl font-extrabold'>Contact Me</h1>
                                </Link>
                            </motion.li> */}
                        </ul>
                    </motion.div>
                    <motion.div
                        className='w-[100%] h-[3px] rounded-md bg-white mt-8 mb-4'
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
                    </motion.div>
                    
                    <motion.div 
                        className = 'flex flex-row my-2 w-[100%] space-x-2 justify-center'
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
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
                </motion.div>
            </MotionConfig>}
        </AnimatePresence>
    </div>
  )
}
