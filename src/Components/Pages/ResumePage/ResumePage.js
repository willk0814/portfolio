import React from 'react'

export default function ResumePage() {
  return (
    <div className='pageContainer'>
        <div className='w-[80vw] flex flex-col items-start'>
            <div className='blurredContentContainer w-[100%] items-start p-2 my-1'>
                <h1 className='text-8xl text-white'>
                    Skills
                </h1>
            </div>

            <div className='blurredContentContainer w-[100%] items-start p-2 my-1'>
                <h1 className='text-8xl text-white'>
                    Education
                </h1>
            </div>

            <div className='blurredContentContainer w-[100%] items-start p-2 my-1'>
                <h1 className='text-8xl text-white'>
                    Experience
                </h1>
            </div>
        </div>
        
    </div>
  )
}
