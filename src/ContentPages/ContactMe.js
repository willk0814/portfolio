import React from 'react'

export default function ContactMe() {
  return (
    <div className='pageContainer p-2' name='contact me'>
        <h1 className='text-white text-8xl text-center'>Contact Me</h1>

        <div className='blurredContentContainer p-4 max-w-3xl w-full'>
          <input type='email' className='bg-inherit w-full border-white border-2 rounded-md text-white placeholder:text-white mb-4 p-1' placeholder='Enter your email here'/>
      
          <textarea className='resize-none bg-inherit w-full h-60 border-white border-2 rounded-md text-white placeholder:text-white p-1' placeholder='Enter your message here'/>
          
          <button className='mt-4 px-2 py-0.5 bg-inherit rounded-md border-white border-2 text-white transition-transform ease-in-out duration-300 hover:scale-150 hover:bg-white hover:text-gray-500'>Send</button>
        </div>
    </div>
  )
}
