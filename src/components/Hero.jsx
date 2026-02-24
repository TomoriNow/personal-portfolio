import React from 'react'
import heroimage from '../assets/sean-profile-image.jpg'
import { TypeAnimation } from 'react-type-animation'
import Reveal from '../utils/Reveal'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow' />
        <div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow animate-delay-500' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full' />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        {/* Profile Image */}
        <Reveal className="order-1 lg:order-2 flex justify-center">
          <motion.div 
            className='relative group'
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow effect */}
            <div className='absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500' />
            
            {/* Image container */}
            <div className='relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[3px]'>
                <div className='w-full h-full rounded-full bg-dark-950 p-1'>
                  <img 
                    className='w-full h-full rounded-full object-cover'
                    src={heroimage} 
                    alt="Sean Galant"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
        
        {/* Text Content */}
        <div className='order-2 lg:order-1 text-center lg:text-left px-4 sm:px-0'>
          <Reveal>
            <p className='text-primary-400 font-medium mb-4 tracking-wider uppercase text-sm'>
              Welcome to my portfolio
            </p>
          </Reveal>
          
          <Reveal>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6'>
              <span className='text-white'>Hi, I'm </span>
              <span className='text-gradient'>Sean</span>
              <br />
              <span className='text-white'>
                <TypeAnimation
                  sequence={[
                    "CS Student",
                    2000,
                    "Fullstack Dev",
                    2000,
                    "ML Enthusiast",
                    2000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                  className='text-gradient-animated'
                />
              </span>
            </h1>
          </Reveal>
          
          <Reveal>
            <p className='text-dark-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed'>
              A computing student passionate about building innovative solutions in 
              <span className='text-primary-400'> Machine Learning</span> and 
              <span className='text-accent-400'> Web Development</span>.
            </p>
          </Reveal>
          
          <Reveal>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <a 
                href='https://drive.google.com/file/d/1r7mM5ETjLFkLbsLSvJomOYjNNh7gxnFA/view?usp=sharing'
                target="_blank"
                rel="noopener noreferrer"
                className='btn-primary text-center'
              >
                <span className='relative z-10'>Download Resume</span>
              </a>
              <a 
                href='#contact' 
                className='btn-outline text-center'
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
          
          {/* Scroll indicator */}
          <Reveal>
            <div className='hidden lg:flex justify-start mt-16'>
              <motion.a 
                href="#skills"
                className='flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors'
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className='text-sm'>Scroll to explore</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
