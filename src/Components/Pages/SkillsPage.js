import React from 'react'

export default function SkillsPage() {
  return (
    <div className='pageContainer' name='skills'>
        <h1 className='text-white text-8xl mb-3'>Skills</h1>
        
        <div className='flex flex-wrap items-start justify-center'>
            <div className='blurredContentContainer p-4 items-start justify-start m-1 w-60'>
                <h1 className='text-white text-2xl font-bold'>Languages</h1>
                <p className='text-white'>Python</p>
                <p className='text-white'>JavaScript/TypeScript</p>
                <p className='text-white'>Java</p>
                <p className='text-white'>C/C++</p>
            </div>
            <div className='blurredContentContainer p-4 items-start justify-start m-1 w-60'>
                <h1 className='text-white text-2xl font-bold'>Front End</h1>
                <p className='text-white'>React</p>
                <p className='text-white'>React Native</p>
                <p className='text-white'>HTML & CSS</p>
                {/* <p className='text-white'>CSS</p> */}
                <p className='text-white'>Tailwind CSS</p>
            </div>
            <div className='blurredContentContainer p-4 items-start justify-start m-1 w-60'>
                <h1 className='text-white text-2xl font-bold'>Back End</h1>
                <p className='text-white'>Node.js</p>
                <p className='text-white'>Express.js</p>
                <p className='text-white'>Next.js</p>
                <p className='text-white'>MongoDB</p>
            </div>
            <div className='blurredContentContainer p-4 items-start justify-start m-1 w-60'>
                <h1 className='text-white text-2xl font-bold'>Machine Learning</h1>
                <p className='text-white'>NumPy</p>
                <p className='text-white'>Pandas</p>
                <p className='text-white'>Jupyter</p>
                <p className='text-white'>Tensorflow</p>
            </div>

        </div>
    </div>
  )
}
