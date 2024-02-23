import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import MobileNavBar from './MobileNavBar'

export default function NavBar() {
    // SV to hold underlined state for full screen NavBar
    const [underlineState, setUnderlineState] = useState({
        home: false,
        about: false,
        skills: false,
        education: false,
        experience: false,
        projects: false,
        contact: false
    })

    // SV to determine which navbar to display
    const [showMobileNavBar, setShowMobileNavBar] = useState(false)

    // Functions to toggle underlines for full screen NavBar
    const toggleUnderline = (variable) => {
        setUnderlineState((prevState) => ({
            ...prevState,
            [variable]: !prevState[variable]
        }))
    }

    // useEffect to detect window resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 855) {
                setShowMobileNavBar(true)
            } else {
                setShowMobileNavBar(false)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return (() => window.removeEventListener('resize', handleResize))
    }, [])

  return (
    <motion.div 
        className='fixed left-0 w-full h-20 z-10 bg-[#2A3C3C]'
        initial = {{ y: '-100vh'}}
        animate = {{ y: 0 }}
        transition = {{ delay: 1, type: 'spring', bounce: 0.3 }}>
        <div className='w-[100%] h-[80px] absolute left-0 flex justify-between p-2'>
            {/* Home Button */}
            <div
                className='blurredContentContainer px-2 flex flex-col items-center justify-center'
                onMouseEnter={() => toggleUnderline('home')} 
                onMouseLeave={() => toggleUnderline('home')}>
                <Link to='/'>
                    <h2 className='text-white cursor-pointer font-semibold text-2xl'>
                        Will Koenig
                    </h2>
                </Link>
                {!showMobileNavBar && <div 
                    className='w-[0%] relative bg-white h-[2px] duration-300 left-0 self-start'
                    style={{ width: underlineState.home ? '100%' : '0%'}}>
                </div>}

            </div>
            {/* Full Screen NavBar */}
            {!showMobileNavBar ? (
                <div 
                    className='blurredContentContainer rounded-xl py-0 flex items-center'
                    style={{display: !showMobileNavBar? '' : 'none'}}>
                    <ul className='flex flex-row list-none'>
                        <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('skills')} 
                            onMouseLeave={() => toggleUnderline('skills')}>
                            <Link to='/skills'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Skills</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.skills ? "100%" : "0%"}}>
                            </div>
                        </li>

                        <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('education')} 
                            onMouseLeave={() => toggleUnderline('education')}>
                            <Link to='/education'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Education</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.education ? '100%' : '0%'}}>
                            </div>
                        </li>

                        <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('experience')} 
                            onMouseLeave={() => toggleUnderline('experience')}>
                            <Link to='/experience'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Experience</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.experience ? '100%' : '0%'}}>
                            </div>
                        </li>

                        <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('projects')} 
                            onMouseLeave={() => toggleUnderline('projects')}>
                            <Link to='/projects'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Projects</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.projects ? '100%' : '0%'}}>
                            </div>
                        </li>

                        {/* <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('contact')} 
                            onMouseLeave={() => toggleUnderline('contact')}>
                            <Link to='/contact'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Contact Me</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.contact ? '100%' : '0%'}}>
                            </div>
                        </li> */}
                    </ul>  
                </div> 
                    ) : (
                <MobileNavBar /> )}
        </div>
    </motion.div>
  )
}
