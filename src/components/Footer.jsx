import React from 'react'

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-black">
      <div className="relative w-full rounded-full md:w-auto md:flex-grow h-0.5 bg-white opacity-20" />
      <div className='w-full sm:h-[150px] p-12 flex justify-between mx-auto'>
        <span className='primary-color'><a href="https://www.linkedin.com/in/sean-galant-365113b0/">Click Here For<br/> Sean Galant's LinkedIn</a></span>
        <p className='text-gray-600'>m.seangalant@gmail.com <br/> +61 0439-520-353</p>
    </div>
    </div>
    
  )
}

export default Footer
