import React from 'react'
import Reveal from '../utils/Reveal'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <section className='relative py-16 sm:py-24' id='contact'>
      {/* Background decoration */}
      <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl' />
      
      <div className='relative z-10 max-w-[800px] mx-auto px-4 sm:px-6'>
        <Reveal>
          <div className='text-center mb-12 px-4 sm:px-0'>
            <h2 className='section-heading inline-block'>Get in Touch</h2>
            <p className='section-subheading mx-auto'>
              Have a project in mind? Let's work together to build something amazing.
            </p>
          </div>
        </Reveal>
        
        <Reveal>
          <div className='glass-card p-8 md:p-10'>
            <form action="https://getform.io/f/awnnvygb" method="POST" className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Name Field */}
                <div className='relative group'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <FiUser className='text-dark-500 group-focus-within:text-primary-400 transition-colors' />
                  </div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder='Your Name' 
                    required
                    className='w-full pl-12 pr-4 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:bg-dark-900 focus:shadow-glow-sm transition-all duration-300'
                  />
                </div>
                
                {/* Email Field */}
                <div className='relative group'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <FiMail className='text-dark-500 group-focus-within:text-primary-400 transition-colors' />
                  </div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='Your Email' 
                    required
                    className='w-full pl-12 pr-4 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:bg-dark-900 focus:shadow-glow-sm transition-all duration-300'
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div className='relative group'>
                <div className='absolute top-4 left-0 pl-4 pointer-events-none'>
                  <FiMessageSquare className='text-dark-500 group-focus-within:text-primary-400 transition-colors' />
                </div>
                <textarea 
                  name="message" 
                  placeholder='Your Message' 
                  required
                  rows='5'
                  className='w-full pl-12 pr-4 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:bg-dark-900 focus:shadow-glow-sm transition-all duration-300 resize-none'
                />
              </div>
              
              {/* Submit Button */}
              <button 
                type='submit' 
                className='w-full btn-primary flex items-center justify-center gap-3 py-4'
              >
                <span className='relative z-10 font-semibold'>Send Message</span>
                <FiSend className='relative z-10' />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
