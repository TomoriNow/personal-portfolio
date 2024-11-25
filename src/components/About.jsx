import React from 'react'
import aboutImg from '../assets/sean-about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    An avid third-year student at the Australian National University with a passion in Computer Science. I have an objective to strive for improvements in developing projects related to machine learning, refine my organizational/coordination skills, and leadership capabilities while constantly being a results-oriented individual. These qualities have led me to assume a position as a member at RISTEK Fasilkom’s Marketing and Communications division, Programming Foundations 1 and 2 Teaching Assistant at the University of Indonesia (UI), and undertake community service.
                    </p>
                </div>
            </div>
            
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/>
        </div>
    </div>
  )
}

export default About