import React, { useState } from 'react'

export default function ResumePage() {

    const [selectedSection, setSelectedSection] = useState('skills')

  return (
    <div className='pageContainer justify-start'>
        <div className='flex w-[70vw] flex-col my-10 justify-start items-center'>

            <h1 className='text-white text-6xl'>Resume</h1>
            <h1 className='text-white text-xl italic mb-2'>
                This page contains all of the information in my resume, select different sections to view all relevant information
            </h1>

            {/* Section Buttons */}
            <div className='flex flex-row h-[60px] w-[65vw] justify-center space-x-2'>
                <div 
                    className={`blurredContentContainer flex justify-start border-4 border-black pt-1 w-1/3 ${selectedSection === 'skills' ? 'h-[100%] rounded-b-none border-b-0' : 'h-[90%]'}`}
                    onClick={() => setSelectedSection('skills')}>
                    <h1 className='text-white text-4xl'>Skills</h1>
                </div>

                <div 
                    className={`blurredContentContainer flex justify-start border-4 border-black pt-1 w-1/3 ${selectedSection === 'education' ? 'h-[100%] rounded-b-none border-b-0' : 'h-[90%]'}`}
                    onClick={() => setSelectedSection('education')}>
                    <h1 className='text-white text-4xl'>Education</h1>
                </div>

                <div 
                    className={`blurredContentContainer flex justify-start border-4 border-black pt-1 w-1/3 ${selectedSection === 'experience' ? 'h-[100%] rounded-b-none border-b-0' : 'h-[90%]'}`}
                    onClick={() => setSelectedSection('experience')}>
                    <h1 className='text-white text-4xl'>Experience</h1>
                </div>

            </div>

            {/* Content */}
            <div className='blurredContentContainer p-2 text-white text-xl border-4 border-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

        </div>
    </div>
  )
}
