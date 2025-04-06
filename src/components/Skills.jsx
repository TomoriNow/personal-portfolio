import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import python from '../assets/Python-logo-notext.svg.png'
import java from '../assets/Java_programming_language_logo.svg.png'
import sql from '../assets/Postgresql_elephant.svg.png'
import flutter from '../assets/flutter.png'
import go from '../assets/Go_Logo_Blue.svg.png'
import django from '../assets/django_logo.png'
import spring from '../assets/Spring_Boot.svg.png'
import Reveal from '../utils/Reveal'



const Skills = () => {
  return (
    
    <Reveal className="h-full">
    <div className='rounded-lg border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                    place-items-center md:flex md:justify-between md:items-center overflow-hidden'>
    
        <h2 className='text-white text-xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack <br/>
        </h2>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={html} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={css} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={javascript} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={tailwind} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={react} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={python} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={java} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={flutter} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={go} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={django} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={sql} alt=""/>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]'>
            <img src={spring} alt=""/>
        </div>
    </div>
    </Reveal>
  )
}

export default Skills
