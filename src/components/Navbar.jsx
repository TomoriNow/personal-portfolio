import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        // Check initial scroll position
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNav = () => {
        setNav(!nav)
    }

    const handleNavClick = () => {
        setNav(false)
        // Force scrolled state after clicking a nav link since we'll be scrolling down
        setTimeout(() => {
            setScrolled(window.scrollY > 50)
        }, 100)
    }
    
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 py-3 border-b border-white/5 shadow-lg shadow-black/20' style={{ backgroundColor: '#020617' }}>
            <div className='max-w-[1400px] mx-auto px-6 flex justify-between items-center'>
                <a href="#" className='text-2xl md:text-3xl font-bold text-gradient hover:opacity-80 transition-opacity'>
                    Sean Galant
                </a>
                
                <ul className='hidden md:flex items-center gap-1'>
                    {['About', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`}
                                className='relative px-5 py-2.5 text-dark-300 hover:text-white transition-colors duration-300 group'
                            >
                                {item}
                                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-3/4 rounded-full' />
                            </a>
                        </li>
                    ))}
                    <li className='ml-4'>
                        <a 
                            href='https://drive.google.com/file/d/1ja9mt6fYZodH-FJQMq20rHhjqtz-7zjR/view?usp=sharing'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:shadow-glow transition-all duration-300 hover:scale-105'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                
                <button 
                    onClick={handleNav} 
                    className='md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors'
                    aria-label="Toggle menu"
                >
                    {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                </button>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleNav}
            />
            
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-[280px] glass-dark transition-transform duration-500 ease-out md:hidden ${
                nav ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className='p-6 flex justify-between items-center border-b border-white/10'>
                    <span className='text-xl font-bold text-gradient'>Sean Galant</span>
                    <button 
                        onClick={handleNav}
                        className='p-2 rounded-lg hover:bg-white/10 transition-colors'
                    >
                        <AiOutlineClose size={20}/>
                    </button>
                </div>
                <ul className='p-6 space-y-2'>
                    {['About', 'Projects', 'Contact'].map((item, index) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`}
                                onClick={handleNavClick}
                                className='block px-4 py-3 text-lg text-dark-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300'
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className='pt-4'>
                        <a 
                            href='https://drive.google.com/file/d/1OZD8jzbPiehYskRBd0KMOmcQgMD_D10y/view?usp=sharing'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium'
                        >
                            Download Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
