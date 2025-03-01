import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-gray-900 text-white p-4 fixed top-0 w-full shadow-lg'>
        <div className='max-w-6xl mx-auto flex justify-between items-center '>
            <h1 className='text-xl font-bold'>Jon's Innovation Platform</h1>
            <ul className='hidden md:flex space-x-6'>
                <li className='hover:text-blue-400 transition'>About</li>
                <li className='hover:text-blue-400 transition'>projects</li>
                <li className='hover:text-blue-400 transition'>Contacts</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav