import React from 'react'
import { FiLinkedin, FiMail, FiGithub, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sean-galant-365113b0/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/TomoriNow', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:m.seangalant@gmail.com', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 sm:py-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient">
              Sean Galant
            </a>
            <p className="text-dark-500 text-sm mt-2">
              Building digital experiences with passion
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-xl glass hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-dark-400 text-sm">m.seangalant@gmail.com</p>
            <p className="text-dark-500 text-sm mt-1">+61 0439-520-353</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5 text-center">
          <p className="text-dark-500 text-sm flex flex-wrap items-center justify-center gap-1">
            © {currentYear} Sean Galant. Made with 
            <FiHeart className="w-4 h-4 text-primary-500" /> 
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
