import React from 'react';


const Navbar = () => {
  return (
    <header className='bg-heroBgClr text-white py-2 px-4 fixed top-0 right-0 left-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            <div>
                <a href='/'>
                    <img src='/logo.png' alt='logo' className='w-30 h-20'/>
                </a>
            </div>

            <div>
                <nav>
                    
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar
