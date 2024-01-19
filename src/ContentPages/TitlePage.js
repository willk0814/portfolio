import React from 'react'

// Import Resume
import Koenig_Resume from '../assets/Koenig_Resume.pdf'

// Import Icons for Links
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function TitlePage() {
  return (
    <div className='pageContainer' name='home'>
        {/* Name Title */}
        <div className='flex-col rounded-md'>
            <h1 className='text-white text-8xl text-center'>Will Koenig</h1>
        </div>

        {/* Social Links */}
        <div className='mt-6'>
          <div className='flex flex-row space-x-4'>
            <a 
            // className='' 
            href='https://linkedin.com/in/will-koenig' 
            target='_blank'
            rel='noreferrer'>
              <AiFillLinkedin className='cursor-pointer' size={70} color='white'/>
            </a>
            <a 
            // className='mx' 
            href='https://github.com/willk0814' 
            target='_blank'
            rel='noreferrer'>
              <AiFillGithub className='cursor-pointer' size={70} color='white'/>
            </a>
            <a 
            // className='mx' 
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
