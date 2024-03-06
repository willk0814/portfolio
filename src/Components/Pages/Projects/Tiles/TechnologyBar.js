import React, { useState, useEffect } from 'react'

import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { SiPython, SiMongodb, SiTailwindcss, 
    SiTypescript, SiPytorch, SiTensorflow, 
    SiNumpy,SiPandas, SiJupyter, SiFramer } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";



export default function TechnologyBar({ stack, full }) {
    
    // State Vars for Technologies
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
    const [HTML, setHTML] = useState(false)
    const [CSS, setCSS] = useState(false)
    const [node, setNode] = useState(false)
    const [framer, setFramer] = useState(false)
    const [overflow, setOverflow] = useState(false)

    useEffect(() => {
        // Create a copy of the stack
        let displayStack = [...stack];
    
        // Check if we want the full stack
        if (!full && stack.length > 2) {
            // Construct abbreviated stack
            displayStack = stack.slice(0, 2);
            displayStack.push('overflow');
        }
    
        // Reset all state variables
        setPython(false);
        setJS(false);
        setTS(false);
        setTailwind(false);
        setReact(false);
        setReactNative(false);
        setExpress(false);
        setMongoDB(false);
        setMongoose(false);
        setPyTorch(false);
        setTensorFlow(false);
        setNumPy(false);
        setPandas(false);
        setJupyter(false);
        setHTML(false);
        setCSS(false);
        setNode(false);
        setFramer(false);
        setOverflow(false);
    
        // Set state variables based on displayStack
        for (const technology of displayStack) {
            switch (technology) {
                case 'JS':
                    setJS(true);
                    break;
                case 'TS':
                    setTS(true);
                    break;
                case 'tailwind':
                    setTailwind(true);
                    break;
                case 'ReactNative':
                    setReactNative(true);
                    break;
                case 'React':
                    setReact(true);
                    break;
                case 'Express':
                    setExpress(true);
                    break;
                case 'Mongoose':
                    setMongoose(true);
                    break;
                case 'MongoDB':
                    setMongoDB(true);
                    break;
                case 'Python':
                    setPython(true);
                    break;
                case 'PyTorch':
                    setPyTorch(true);
                    break;
                case 'TensorFlow':
                    setTensorFlow(true);
                    break;
                case 'NumPy':
                    setNumPy(true);
                    break;
                case 'Pandas':
                    setPandas(true);
                    break;
                case 'Jupyter':
                    setJupyter(true);
                    break;
                case 'CSS':
                    setCSS(true);
                    break;
                case 'HTML':
                    setHTML(true);
                    break;
                case 'node':
                    setNode(true);
                    break;
                case 'framer':
                    setFramer(true);
                    break;
                case 'overflow':
                    setOverflow(true);
                    break;
                default:
                    console.log('Unrecognized technology: ', technology);
            }
        }
    }, [stack, full]);
  return (
    <div className='flex flex-row flex-wrap items-start'>
        {react && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <FaReact size={25} color='white'/>
        </div>}

        {python && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiPython size={25} color='white' />
        </div>}

        {reactNative && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <TbBrandReactNative size={25} color='white' />
        </div>}

        {mongoDB && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiMongodb size={25} color='white' />
        </div>}

        {tailwind && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiTailwindcss size={25} color='white' />
        </div>}

        {JS && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <IoLogoJavascript size={25} color='white' />
        </div>}

        {TS && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiTypescript size={25} color='white' />
        </div>}

        {pyTorch && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiPytorch size={25} color='white' />
        </div>}

        {tensorFlow && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiTensorflow size={25} color='white' />
        </div>}

        {numPy && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiNumpy size={25} color='white' />
        </div>}

        {pandas && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiPandas size={25} color='white' />
        </div>}

        {jupyter && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiJupyter size={25} color='white' />
        </div>}
        
        {CSS && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <IoLogoCss3 size={25} color='white' />
        </div>}

        {HTML && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <FaHtml5 size={25} color='white' />
        </div>}

        {node && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <FaNodeJs size={25} color='white' />
        </div>}

        {framer && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <SiFramer size={25} color='white' />
        </div>}

        {express && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <h2 className='text-white'>Express.js</h2>
        </div>}

        {mongoose && <div className='blurredContentContainer w-fit items-start p-2 mr-1 mb-1'>
            <h2 className='text-white'>Mongoose.js</h2>
        </div>}

        {overflow && <div className='flex w-fit items-start py-2 mr-1  mb-1'>
            <h2 className='text-white'>...</h2>
        </div>}
    </div>
  )
}
