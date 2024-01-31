import React, { useState } from 'react'

// Import downward arrow for expandable components
import {FaArrowUp} from 'react-icons/fa'

export default function ExperiencePage() {
  // SV to hold the current expanded section - initialied to sparks
  const [expandedSection, setExpandedSection] = useState('Sparks')

  // Function to handle setting the expanded section
  const handleSelectSection = (section) => {
    console.log(section)
    setExpandedSection(section)
  }

  // Function that checks if a section is expanded
  const isExpanded = (section) => section === expandedSection
  

  return (
    <div className='pageContainer' name='experience'>
        <h1 className='text-white text-6xl md:text-8xl mb-4 text-center'>Experience</h1>

        <div className='flex flex-col space-y-4 p-2'>

          {/* Sparks Biomechanics Lab */}
          <div className='blurredContentContainer max-w-3xl p-4 items-start'>
            <div className='flex items-center justify-between w-full cursor-pointer'
            onClick={() => handleSelectSection('Sparks')}>
              <div className='flex flex-col items-baseline'>
                <h1 className='text-white text-4xl'>Sparks Biomechanics Lab</h1>
                <p className='text-white italic'>Mobile Software Engineer</p>
              </div>
              <FaArrowUp rotate={180} color='white' size={30} className={`transform ${isExpanded('Sparks') ? 'rotate-180' : ''} transition-transform duration-300`} />
            </div>
            {/* Sparks expandable section */}
            <div className={`overflow-hidden transition-height duration-300 ${isExpanded('Sparks') ? 'h-auto' : 'h-0'}`}>
              <ul className = 'text-white list-disc px-6 text-xl'>
                <li>Lead developer of a Bluetooth device controller application that primarily uses JavaScript (React Native) and C++ for some of the research devices</li>
                <li>Managed the work of five engineers using SCRUM, JIRA, and Github</li>
                <li>Cultivated a culture of Agile development and continuous improvement via inspect and adapt ceremonies:  daily standups, sprint reviews, retrospectives</li>
                <li>Led weekly client-facing meetings to generate enhancement requirements</li>
                <li>Delivered an application that streamlined testing and data collection resulting in a 300% increase in plants tested per session</li>
              </ul>
            </div>
          </div>

          {/* Viinko */}
          <div className='blurredContentContainer max-w-3xl p-4 items-start justify-center'>
            <div className='flex items-center justify-between w-full cursor-pointer'
            onClick={() => handleSelectSection('Viinko')}>
              <div className='flex flex-col items-baseline'>
                <h1 className='text-white text-4xl'>Viinko</h1>
                <p className='text-white italic'>Software Engineer Intern</p>
              </div>
              <FaArrowUp rotate={180} color='white' size={30} className={`transform ${isExpanded('Viinko') ? 'rotate-180' : ''} transition-transform ease-in-out duration-300`} />
            </div>
            {/* Viinko expandable section */}
            <div className={`overflow-hidden transition-height duration-300 ${isExpanded('Viinko') ? 'h-auto' : 'h-0'}`}>
              <ul className = 'text-white list-disc px-6 text-xl'>
                  <li>
                    Developed a Chrome extension in JavaScript and HTML/CSS used daily by approximately ~2000 students as a core element of their education software
                  </li>
                  <li>Created an interface to connect Google Classroom and Viinko calendar to reduced the time necessary to enter new assignments by 65% and increased student engagement with the platform</li>
              </ul>
            </div>
          </div>

          {/* Business Basics for Engineers */}
          <div className='blurredContentContainer  max-w-3xl p-4 items-start'>
          <div className='flex items-center justify-between w-full cursor-pointer'
          onClick={() => handleSelectSection('BBE')}>
              <div className='flex flex-col items-baseline'>
                <h1 className='text-white text-4xl'>Business Basics for Engineers</h1>
                <p className='text-white italic'>Founder, President</p>
              </div>
              <FaArrowUp rotate={180} color='white' size={30} className={`transform ${isExpanded('BBE') ? 'rotate-180' : ''} transition-transform duration-300`} />
            </div>
            {/* Business Basics for Engineers expandable section */}
            <div className={`overflow-hidden transition-height duration-300 ${isExpanded('BBE') ? 'h-auto' : 'h-0'}`}>
            <ul className = 'text-white list-disc px-6 text-xl'>
                  <li>Founded and managed and on-campus Registered Student Organization with a mission to help engineering students develop awareness of business fundamentals
                  </li>
                  <li>Conducted student outreach events to recruit 52 new members in our first semester</li>
                  <li>Recruited industry speakers and facilitated five events followed by roundtable discussions</li>
              </ul>
            </div>
          </div>

        </div>
    </div>
  )
}
