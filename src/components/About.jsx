import React from 'react'
import aboutImg from '../assets/sean-about.jpg'
import Reveal from '../utils/Reveal'

const About = () => {
  const highlights = [
    { label: 'Software Engineer Intern (AI)', org: 'SIRCLO' },
    { label: 'Co-Founder/VP', org: 'ANU Data Science Community' },
    { label: 'Academic Tutor', org: 'ANU Machine Learning' },
    { label: 'Teaching Assistant', org: 'UI Advanced Programming' },
  ]

  return (
    <section className='relative py-16 sm:py-24' id='about'>
      {/* Background decoration */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl' />
      
      <div className='relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          {/* Image */}
          <Reveal>
            <div className='relative group max-w-[400px] mx-auto lg:max-w-none'>
              <div className='absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='relative overflow-hidden rounded-3xl'>
                <div className='absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10' />
                <img 
                  className='w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105' 
                  src={aboutImg}
                  alt="Sean Galant"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
          
          {/* Content */}
          <div className='text-center lg:text-left'>
            <Reveal>
              <h2 className='section-heading'>About Me</h2>
            </Reveal>
            
            <Reveal>
              <p className='text-dark-300 text-lg leading-relaxed mb-8'>
                I am a fourth-year student at the <span className='text-primary-400'>Australian National University (ANU)</span> with a passion for Computer Science. I strive for continuous improvement in developing projects related to machine learning, while refining my organizational and leadership capabilities as a results-oriented individual.
              </p>
            </Reveal>
            
            <Reveal>
              <div className='grid sm:grid-cols-2 gap-4'>
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className='glass-card p-4 card-hover group'
                  >
                    <p className='text-white font-medium group-hover:text-primary-400 transition-colors'>
                      {item.label}
                    </p>
                    <p className='text-dark-400 text-sm mt-1'>
                      {item.org}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
