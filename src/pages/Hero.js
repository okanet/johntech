import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to bg-gray-700 text-white text-center'>
        <h1 className='text-4xl md:text-6xl font-bold'>Hello i'm Johnson</h1>
        <p className='text-xl mt-4'>A web Developer and Innovator</p>
        <a href='#' className='mt-6 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700 transition'>Hire Me</a>
    </section>
  )
}

export default Hero