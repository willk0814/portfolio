import React, { useState, useEffect } from 'react'

import { FaReact } from 'react-icons/fa'
import { SiPython, SiMongodb, 
    SiTailwindcss, SiTypescript, 
    SiPytorch, SiTensorflow,
    SiNumpy, SiPandas,
    SiJupyter } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";


export default function TechnologyBar({ stack }) {
    const [python, setPython] = useState(false)
    const [JS, setJS] = useState(false)
    const [TS, setTS] = useState(false)
    const [tailwind, setTailwind] = useState(false)
    const [react, setReact] = useState(false)
    const [reactNative, setReactNative] = useState(false)
    const [express, setExpress] = useState(false)
    const [mongoDB, setMongoDB] = useState(false)
    const [mongoose, setMongoose] = useState(false)
    const [pyTorch, setPyTorch] = useState(false)
    const [tensorFlow, setTensorFlow] = useState(false)
    const [numPy, setNumPy] = useState(false)
    const [pandas, setPandas] = useState(false)
    const [jupyter, setJupyter] = useState(false)

    useEffect(() => {
        for (const technology of stack) {
            if (technology === 'JS') {
                setJS(true)
            } else if (technology === 'TS'){
                setTS(true)
            } else if (technology === 'ReactNative') {
                setReactNative(true)
            } else if (technology === 'React') {
                setReact(true)
            } else if (technology === 'Express') {
                setExpress(true)
            } else if (technology === 'Mongoose') {
                setMongoose(true)
            } else if (technology === 'MongoDB') {
                setMongoDB(true)
            } else if (technology === 'Python') {
                setPython(true)
            } else if (technology === 'PyTorch'){
                setPyTorch(true)
            } else if (technology === 'TensorFlow'){
                setTensorFlow(true)
            } else if (technology === 'NumPy'){
                setNumPy(true)
            } else if (technology === 'Pandas'){
                setPandas(true)
            } else if (technology === 'Jupyter') {
                setJupyter(true)
            } else {
                console.log('Unrecognized')
            }
        }
    }, [stack])
  return (
    <div className='flex flex-row flex-wrap items-start'>
        {react && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <FaReact size={25} color='white'/>
        </div>}

        {python && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiPython size={25} color='white' />
        </div>}

        {reactNative && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <TbBrandReactNative size={25} color='white' />
        </div>}

        {express && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <h2 className='text-white'>Express.js</h2>
        </div>}

        {mongoose && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <h2 className='text-white'>Mongoose.js</h2>
        </div>}

        {mongoDB && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiMongodb size={25} color='white' />
        </div>}

        {tailwind && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiTailwindcss size={25} color='white' />
        </div>}

        {JS && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <IoLogoJavascript size={25} color='white' />
        </div>}

        {TS && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiTypescript size={25} color='white' />
        </div>}

        {pyTorch && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiPytorch size={25} color='white' />
        </div>}

        {tensorFlow && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiTensorflow size={25} color='white' />
        </div>}

        {numPy && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiNumpy size={25} color='white' />
        </div>}

        {pandas && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiPandas size={25} color='white' />
        </div>}

        {jupyter && <div className='blurredContentContainer w-fit items-start mb-3 p-2 mr-1'>
            <SiJupyter size={25} color='white' />
        </div>}
    </div>
  )
}
