import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

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

    // SV to hold state of mobile NavBar 
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

    // Functions to toggle underlines for full screen NavBar
    const toggleUnderline = (variable) => {
        setUnderlineState((prevState) => ({
            ...prevState,
            [variable]: !prevState[variable]
        }))
    }

    const toggleMobileDisplay = () => {
        setMobileNavbarOpen(prevState => !prevState)
    }

    // useEffect to detect window resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 885) {
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
    <div className='fixed left-0 w-full h-20 z-10'>
        <div className='w-[100%] h-[80px] absolute left-0 flex justify-between bg-[#2A2A2A] p-2'>
            {/* Home Button */}
            <div
                className='flex flex-col items-center justify-center'
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
                    className='flex items-center bg-[#2A2A2A]'
                    style={{display: !showMobileNavBar? '' : 'none'}}>
                    <ul className='flex flex-row list-none'>
                        <li 
                            className='px-2'
                            onMouseEnter={() => toggleUnderline('education')} 
                            onMouseLeave={() => toggleUnderline('education')}>
                            <Link to='/resume'>
                                <h2 className='text-white cursor-pointer font-semibold text-2xl'>Resume</h2>
                            </Link>
                            <div 
                                className='w-[0%] relative bg-white h-[2px] duration-300'
                                style={{ width: underlineState.education ? '100%' : '0%'}}>
                            </div>
                        </li>

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

                        <li 
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
                        </li>
                    </ul>  
                </div> 
                    ) : (
                // Mobile NavBar toggle button
                <div
                    className='p-2 flex items-center justify-center z-10' 
                    onClick={toggleMobileDisplay}>
                    {!mobileNavbarOpen ? (
                        <FaBars size={30} color='white' className='cursor-pointer'/>
                            ) : (
                        <FaTimes size={30} color='white' className='cursor-pointer'/>)}
                </div> )}
        </div>
        {/* Mobile NavBar */}
        <div
            className='relative flex items-center justify-center top-0 left-0 w-full bg-[#2A2A2A]'
            style={{ display: mobileNavbarOpen? '' : 'none'}}>
            <ul className='list-none'>

                <li className='text-4xl py-[1.5rem] self-center'>
                    <Link to='/'>
                        <h2 className='text-white text-center cursor-pointer'>Home</h2>
                    </Link>
                </li>

                <li className='text-4xl py-[1.5rem]'>
                    <Link to='education' smooth={true} duration={500} onClick={toggleMobileDisplay}>
                        <h2 className='text-white text-center cursor-pointer'>Education</h2>
                    </Link>
                </li>

                <li className='text-4xl py-[1.5rem]'>
                    <Link to='experience' smooth={true} duration={500} onClick={toggleMobileDisplay}>
                        <h2 className='text-white text-center cursor-pointer'>Experience</h2>
                    </Link>
                </li>

                <li className='text-4xl py-[1.5rem]'>
                    <Link to='projects' smooth={true} duration={500} onClick={toggleMobileDisplay}>
                        <h2 className='text-white text-center cursor-pointer'>Projects</h2>
                    </Link>
                </li>

                <li className='text-4xl py-[1.5rem]'>
                    <Link to='contact me' smooth={true} duration={500} onClick={toggleMobileDisplay}>
                        <h2 className='text-white text-center cursor-pointer'>Contact Me</h2>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
