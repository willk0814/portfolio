import React from 'react'

import { skillsData } from '../assets/skillsData'

function SkillCard({title, content_arr}) {

    return (
        <div 
        className='blurredContentContainer items-start m-1 p-2 w-[300px]'>
            <h1 className='text-white text-4xl'>{title}</h1>
            
            <ul className='list-disc'>
                {content_arr.map((content, ind) => (
                    <li key={ind} className='text-white ml-4'>{content}</li>
                ))}
            </ul>
        </div>
    )}

export default function SkillsAndEducation() {
  return (
    <div className='pageContainer' name='skillsAndEducation'>
        <div className='w-[80vw] flex flex-row'>
            <div className='flex flex-col w-[50%] mr-2'>
                <h1 className='text-white text-8xl'>Skills</h1>
                <div className='flex flex-wrap'>
                    {Object.keys(skillsData).map((title, ind) => {
                        let content = skillsData[title]
                        return (
                        <SkillCard 
                            key={ind}
                            title={title} 
                            content_arr={content}/>
                    )})}
                </div>
                
            </div>

            <div className='flex flex-col w-[50%]'>
                <h1 className='text-white text-8xl'>Education</h1>

                <div className='blurredContentContainer m-1 p-4 items-start'>
                    <h1 className='text-white text-4xl'>Stevens</h1>
                    <p className='text-white italic text-bold text-xl'>M.S. in Machine Learning</p>
                    <ul className='pl-4 list-disc text-white'>
                        <li>Expected Graduation date: December 2024</li>
                        <li>Part time degree track that allows me to remain elligible for full-time work</li>
                        <li>4.0 GPA through all completed courses</li>
                    </ul>
                </div>

                <div className='blurredContentContainer m-1 p-4 items-start'>
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
        
    </div>
  )
}
