import React from 'react'

// Import Resume
import Koenig_Resume from '../../assets/Koenig_Resume.pdf'

// Import Icons for Links
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function TitlePage() {
  return (
    <div className='pageContainer' name='home'>

        {/* About Me */}
        <div className='flex flex-col w-[50vw] items-start justify-center'>

          <div className='blurredContentContainer'>
            <p className='text-white text-2xl p-2'>Hello! My name is, </p>
          </div>

          {/* Name Title */}
          <h1 className='text-white text-8xl mb-3'>Will Koenig</h1>

          <div className='blurredContentContainer'>
            <p className='text-white text-2xl p-2'>This is some testing text, this is even more testing text, even more testing text, even more testing text, even more more more more</p>
          </div>

          {/* Social Links */}
          <div className='flex flex-row space-x-2 my-2 w-[100%]'>
            <a 
              className='blurredContentContainer w-1/3 py-2' 
              href='https://linkedin.com/in/will-koenig' 
              target='_blank'
              rel='noreferrer'>
              <AiFillLinkedin className='cursor-pointer' size={70} color='white'/>
            </a>
            <a 
              className='blurredContentContainer w-1/3' 
              href='https://github.com/willk0814' 
              target='_blank'
              rel='noreferrer'>
              <AiFillGithub className='cursor-pointer' size={70} color='white'/>
            </a>
            <a 
              className='blurredContentContainer w-1/3' 
              href={Koenig_Resume} 
              target='_blank'
              rel='noopener noreferrer'>
              <HiOutlineDocumentText className='cursor-pointer' size={70} color='white'/>
            </a>
          </div>
        </div>

        {/* Floating Arrow Down */}

    </div>
  )
}
