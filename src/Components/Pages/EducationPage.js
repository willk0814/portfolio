import React from 'react'

export default function EducationPage() {
  return (
    <div className='pageContainer' name='education'>
        <h1 className='text-white text-6xl md:text-8xl mb-4'>Education</h1>

        <div className='flex flex-wrap items-center justify-center'>
          <div className='blurredContentContainer m-2 p-4 max-w-[450px] w-[90vw] items-start justify-start'>
            <h1 className='text-white text-4xl'>Stevens</h1>
            <p className='text-white italic text-bold text-xl'>M.S. in Machine Learning</p>
            <ul className='pl-4 list-disc text-white'>
              <li>Expected Graduation date: December 2024</li>
              <li>Part time degree track that allows me to remain elligible for full-time work</li>
              <li>4.0 GPA through all completed courses</li>
            </ul>
          </div>

          <div className='blurredContentContainer m-2 p-4 max-w-[450px] w-[90vw] items-start justify-start'>
            <h1 className='text-white text-4xl'>University of Delaware</h1>
            <p className='text-white italic text-bold text-xl'>B.S. in Computer Science</p>
            <ul className='pl-4 list-disc text-white'>
              <li>Minor in CyberSecurity</li>
              <li>Concentrated degree in Artificial Intelligence & Machine Learning</li>
              <li>5 time Deans List honoree</li>
            </ul>
          </div>

        </div>
    </div>
  )
}
