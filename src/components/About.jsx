import React from 'react'
import aboutImg from '../assets/sean-about.jpg'
import Reveal from '../utils/Reveal'

const About = () => {
  return (
    <Reveal className="h-full">
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                      I am a fourth-year student at the Australian National University (ANU) with a passion in Computer Science. I have an objective to strive for improvements in developing projects related to machine learning, and refine my organizational and leadership capabilities while constantly being a results-oriented individual. These qualities have led me to assume a position as a Software Engineer Intern (AI) at SIRCLO, a Co-Founder/VP of the ANU Data Science Community, an Academic Tutor for Introduction to Machine Learning at the ANU, and an Advanced Programming Teaching Assistant at the University of Indonesia (UI).
                    </p>
                </div>
            </div>
            
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/>
        </div>
    </div>
    </Reveal>
  )
}

export default About
