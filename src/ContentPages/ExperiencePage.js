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
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat erat. Quisque eleifend id tortor quis condimentum. Aenean ut accumsan ex, vel ornare turpis. Morbi sed finibus mauris. Phasellus cursus auctor orci, et volutpat sem fermentum et. Nam sodales quam nec lorem accumsan euismod. Integer finibus euismod cursus. Integer id dui pulvinar ipsum consectetur ultricies eu ac est. Vivamus gravida metus et scelerisque auctor. In id enim velit. Pellentesque sapien arcu, porttitor sed commodo non, venenatis vitae est.</p>
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
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat erat. Quisque eleifend id tortor quis condimentum. Aenean ut accumsan ex, vel ornare turpis. Morbi sed finibus mauris. Phasellus cursus auctor orci, et volutpat sem fermentum et. Nam sodales quam nec lorem accumsan euismod. Integer finibus euismod cursus. Integer id dui pulvinar ipsum consectetur ultricies eu ac est. Vivamus gravida metus et scelerisque auctor. In id enim velit. Pellentesque sapien arcu, porttitor sed commodo non, venenatis vitae est.</p>
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
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat erat. Quisque eleifend id tortor quis condimentum. Aenean ut accumsan ex, vel ornare turpis. Morbi sed finibus mauris. Phasellus cursus auctor orci, et volutpat sem fermentum et. Nam sodales quam nec lorem accumsan euismod. Integer finibus euismod cursus. Integer id dui pulvinar ipsum consectetur ultricies eu ac est. Vivamus gravida metus et scelerisque auctor. In id enim velit. Pellentesque sapien arcu, porttitor sed commodo non, venenatis vitae est.</p>
            </div>
          </div>

        </div>
    </div>
  )
}
