import React, { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'



export default function FullNavBar() {

    const location = useLocation()

    // SV to hold underlined state for full screen NavBar
    const [underlineState, setUnderlineState] = useState({
        home: false,
        about: false,
        resume: false,
        skills: false,
        education: false,
        experience: false,
        projects: false,
        contact: false
    })

    const [currentLocation, setCurrentLocation] = useState('')

    // Functions to toggle underlines for full screen NavBar
    const toggleUnderline = (variable) => {
        // confirm that the desired location is not the current location
        if (variable !== currentLocation){
            setUnderlineState((prevState) => ({
                ...prevState,
                [variable]: !prevState[variable]
            }))
        }
    }

    // Use Effect to handle changes in location
    useEffect(() => {
        // isolate and store the current location
        const current_location = location.pathname.substring(1)
        setCurrentLocation(current_location)

        // set underline State -> all other locs to false, current Location to true
        setUnderlineState(prevState => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(key => {
                if (key === current_location){
                    newState[key] = true
                } else {
                newState[key] = false;
                }
            });
            return newState;
        });
        
    }, [location])

  return (
    <div 
        className='blurredContentContainer rounded-xl py-0 flex items-center'>
        <ul className='flex flex-row list-none'>
            <li 
                className='px-2'
                onMouseEnter={() => toggleUnderline('resume')} 
                onMouseLeave={() => toggleUnderline('resume')}>
                <Link to='/resume'>
                    <h2 className='text-white cursor-pointer font-semibold text-2xl'>Resume</h2>
                </Link>
                <div 
                    className='w-[0%] relative bg-white h-[2px] duration-300'
                    style={{ width: underlineState.resume ? "100%" : "0%"}}>
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
  )
}
