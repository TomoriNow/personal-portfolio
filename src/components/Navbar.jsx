import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return (

        <div className='border border-gray-600 bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ml-4'>Sean Galant</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#projects'>Projects</a></li>
                <li className='p-5'><a href='#contact'>Contact</a></li>
            </ul>
            
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' 
                    : 'z-10 fixed h-full top-0 left-[-100%] w-[60%] ease-in-out duration-500'}>
                <div className='mx-auto flex justify-between'>
                    <h1 className=' m-4 text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'> Sean Galant</h1>
                    <div onClick={handleNav} className='block md:hidden mr-6 mt-7'>
                        <AiOutlineClose size={20}/>
                    </div>
                </div>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#projects'>Projects</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>    
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
