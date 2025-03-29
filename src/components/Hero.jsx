import React from 'react'
import heroimage from '../assets/sean-profile-image.jpg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img className='rounded-full' src={heroimage} alt="hero image"/>
        </div>
        
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                I'm a
                </span><br/>
                <TypeAnimation
                sequence={[
                    "CS Student",
                    1000,
                    "Fullstack Dev",
                    1000,
                    "ML Enthusiast",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>
            
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Sean Galant, a passionate computing student with experience in Web Development and Machine Learning.
            </p>
            
            <div className='my-8'>
                <a href='https://drive.google.com/file/d/13LQaqljD4rjMHjT5o_AADb5DtTOEBt5T/view?usp=sharing' className='font-bold px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    Download Resume
                </a>
                <a href='#contact' className='font-bold px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
