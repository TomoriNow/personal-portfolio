import React, { useRef } from 'react'
import heroimage from '../assets/sean-profile-image.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion, useScroll, useTransform } from 'motion/react'

const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={sectionRef} className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Grid pattern background */}
      <div className='absolute inset-0 opacity-[0.03]' style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Animated gradient orbs */}
      <motion.div className='absolute inset-0 overflow-hidden' style={{ y: bgY }}>
        <motion.div
          className='absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl'
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl'
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full' />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className='relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        {/* Profile Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className='relative group'
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rotating ring */}
            <motion.div
              className='absolute -inset-6 rounded-full'
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(6,182,212,0.3), transparent, rgba(59,130,246,0.3), transparent)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className='absolute -inset-6 rounded-full bg-dark-950/80' />

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
        </motion.div>
        
        {/* Text Content */}
        <div className='order-2 lg:order-1 text-center lg:text-left px-4 sm:px-0'>
          <motion.p
            className='text-primary-400 font-medium mb-4 tracking-[0.2em] uppercase text-sm'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1
            className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.h1>
          
          <motion.p
            className='text-dark-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A computing student passionate about building innovative solutions in 
            <span className='text-primary-400'> Machine Learning</span> and 
            <span className='text-accent-400'> Software Engineering</span>.
          </motion.p>
          
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a 
              href='https://drive.google.com/file/d/1ja9mt6fYZodH-FJQMq20rHhjqtz-7zjR/view?usp=sharing'
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
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className='hidden lg:flex justify-start mt-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="#expertise"
              className='flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors'
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className='text-sm'>Scroll to explore</span>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll progress line */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 z-[60] origin-left'
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  )
}

export default Hero
