import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

import { GoHomeFill } from "react-icons/go";

// Import Full & Mobile NavBars
import FullNavBar from './FullNavBar'
import MobileNavBar from './MobileNavBar'

export default function NavBar() {

    const location = useLocation()

    // SV to hold underlined state for full screen NavBar
    const [underlineState, setUnderlineState] = useState({
        home: false,
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
    
    // useEffect to confirm location path
  return (
    <motion.div 
        className='fixed left-0 w-full h-20 z-10 bg-[]'
        initial = {{ y: '-100vh'}}
        animate = {{ y: 0 }}
        transition = {{ delay: 1, type: 'spring', bounce: 0.3 }}>
        <div className='w-[100%] h-[80px] absolute left-0 flex justify-between p-2'>
            
            {/* Home Button */}
            {showMobileNavBar ? (

                // Mobile Home Button
                <div className='blurredContentContainer items-center justify-center px-1'>
                    <Link to='/portfolio'>
                        <GoHomeFill color='white' size={30} />
                    </Link>
                </div>
            ) : (
                // Full Screen Home Button
                <div
                    className='blurredContentContainer px-2 flex flex-col items-center justify-center'
                    onMouseEnter={() => toggleUnderline('home')} 
                    onMouseLeave={() => toggleUnderline('home')}>
                    <Link to='/portfolio'>
                        <h2 className='text-white cursor-pointer font-semibold text-2xl'>
                            Will Koenig
                        </h2>
                    </Link>
                    
                    {!showMobileNavBar && <div 
                        className='w-[0%] relative bg-white h-[2px] duration-300 left-0 self-start'
                        style={{ width: underlineState.home ? '100%' : '0%'}}>
                    </div>}

                </div>
            )}
            

            
            {/* Dynamic NavBar */}
            {!showMobileNavBar ? (
                <FullNavBar />
                    ) : (
                <MobileNavBar /> 
                    )}
        </div>
    </motion.div>
  )
}
