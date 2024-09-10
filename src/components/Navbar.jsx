import React, { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { motion } from 'framer-motion';


const Navbar = () => {

    const [IsOpen, setIsOpen] = useState(false);
    const [ActiveSection, setActiveSection] = useState('home');
    const handleToggle = () => {
        setIsOpen(!IsOpen)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
        const CurrentScrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;

                if (CurrentScrollPosition >= offsetTop && CurrentScrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        })

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    {/* function for smooth scrolling */}
    const handleScrollTo = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    
  return (
    <header className='bg-heroBgClr text-white py-2 px-4 fixed top-0 right-0 left-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            <div>
                <a href='/'>
                    <img src='/logo.png' alt='logo' className='w-30 h-20'/>
                </a>
            </div>

            <div className='hidden md:flex flex-grow justify-center' >
                <nav>
                    <ul className='flex text-lg font-medium flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
                        <li>
                            <motion.a
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            href='#home'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('home');
                            }}
                            className={`text-white ${ActiveSection === 'home' ? 'isActiveClr' : ''}`}
                            >Home</motion.a>
                        </li>

                        <li>
                            <motion.a
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            href='#services'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('services');
                            }}
                            className={`text-white ${ActiveSection === 'services' ? 'isActiveClr' : ''}`}
                            >Services</motion.a>
                        </li>

                        <li>
                            <motion.a
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            href='#about'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('about');
                            }}
                            className={`text-white ${ActiveSection === 'about' ? 'isActiveClr' : ''}`}
                            >About Us</motion.a>
                        </li>

                        <li>
                            <motion.a href='#pricing'
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('pricing');
                            }}
                            className={`text-white ${ActiveSection === 'pricing' ? 'isActiveClr' : ''}`}
                            >Pricing</motion.a>
                        </li>

                        <li>
                            <motion.a
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            href='#testimonial'
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('testimonial');
                            }}
                            className={`text-white ${ActiveSection === 'testimonial' ? 'isActiveClr' : ''}`}
                            >Testimonial</motion.a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='hidden md:block'>
                <a href='#contact' className='bg-primary text-black py-2 px-4 rounded hover:bg-primary/90'
                onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('contact');
                }}
                >
                    Contact Us
                </a>
            </div>

            <div className='block md:hidden'>
                <button
                onClick={handleToggle}
                className={`text-white focus:outline-none ${IsOpen ? 'border border-white' : ''}`}>
                <CiMenuFries className='size-6'/>
                </button>
            </div>
        </div>

        {
            IsOpen && (
                <nav className='absolute top-full left-0 w-full bg-heroBgClr z-20 md:hidden'>
                    <ul className='text-lg flex flex-col p-4 space-y-2'>
                    <li>
                            <motion.a
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClose();
                                handleScrollTo('home');
                            }}
                            href='#home'
                            className={`text-white ${ActiveSection === 'home' ? 'isActiveClr' : ''}`}
                            >Home</motion.a>
                        </li>
                        <li>
                            <motion.a href='#services'
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClose();
                                handleScrollTo('services');
                            }}
                            className={`text-white ${ActiveSection === 'services' ? 'isActiveClr' : ''}`}
                            >Services</motion.a>
                        </li>
                        <li>
                            <motion.a href='#about'
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClose();
                                handleScrollTo('about');
                            }}
                            className={`text-white ${ActiveSection === 'about' ? 'isActiveClr' : ''}`}
                            >About Us</motion.a>
                        </li>
                        <li>
                            <motion.a href='#pricing'
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClose();
                                handleScrollTo('pricing');
                            }}
                            className={`text-white ${ActiveSection === 'pricing' ? 'isActiveClr' : ''}`}
                            >Pricing</motion.a>
                        </li>
                        <li>
                            <motion.a href='#testimonial'
                            whileHover={{scale: 1.1 }}
                            whileTap={{scale: 0.9 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClose();
                                handleScrollTo('testimonial');
                            }}
                            className={`text-white ${ActiveSection === 'testimonial' ? 'isActiveClr' : ''}`}
                            >Testimonial</motion.a>
                        </li>
                        <li className='py-2'>
                        <a href='#contact'
                        className='text-black bg-primary px-4 py-2 rounded hover:bg-primary/90'
                        onClick={(e) => {
                            e.preventDefault();
                            handleClose();
                            handleScrollTo('contact');
                        }
                        }
                        >Contact Us</a>
                        </li>
                    </ul>
                </nav>
            )
        }
    </header>
  )
}

export default Navbar
