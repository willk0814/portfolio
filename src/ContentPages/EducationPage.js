import React from 'react'

export default function EducationPage() {
  return (
    <div className='pageContainer' name='education'>
        <h1 className='text-white text-6xl md:text-8xl mb-4'>Education</h1>

        <div className='flex flex-wrap items-center justify-center'>
          <div className='blurredContentContainer m-2 p-4 max-w-md items-start justify-start'>
            <h1 className='text-white text-4xl'>Stevens</h1>
            <p className='text-white italic text-bold text-xl'>M.S. in Machine Learning</p>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat erat. Quisque eleifend id tortor quis condimentum. Aenean ut accumsan ex, vel ornare turpis. Morbi sed finibus mauris. Phasellus cursus auctor orci, et volutpat sem fermentum et. Nam sodales quam nec lorem accumsan euismod. Integer finibus euismod cursus. Integer id dui pulvinar ipsum consectetur ultricies eu ac est. Vivamus gravida metus et scelerisque auctor.</p>
          </div>

          <div className='blurredContentContainer m-2 p-4 max-w-md items-start justify-start'>
            <h1 className='text-white text-4xl'>University of Delaware</h1>
            <p className='text-white italic text-bold text-xl'>B.S. in CS, Minor in CyberSecurity</p>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat erat. Quisque eleifend id tortor quis condimentum. Aenean ut accumsan ex, vel ornare turpis. Morbi sed finibus mauris. Phasellus cursus auctor orci, et volutpat sem fermentum et. Nam sodales quam nec lorem accumsan euismod. Integer finibus euismod cursus. Integer id dui pulvinar ipsum consectetur ultricies eu ac est. Vivamus gravida metus et scelerisque auctor.</p>
          </div>

        </div>
    </div>
  )
}
