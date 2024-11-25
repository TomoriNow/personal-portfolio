import React from 'react'
import powerplate from '../assets/power-platee.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
        <p className='text-gray-400'>Check out some of my recent projects</p>
      </div>
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
            <img src={powerplate} alt=""/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 
                            flex flex-col justify-center items-center'>
                <a href="https://power-plate.vercel.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Live
                    </button>
                </a>     
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects