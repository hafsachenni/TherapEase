import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import heroImage from '../assets/hero.png';
import {motion} from 'framer-motion';


const Hero = () => {
  return ( 
    <section id='home' className='bg-heroBgClr text-white flex items-center pt-28 md:h-screen'>
      <div className='mx-auto container flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side of hero section */}
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-secondary font-bold leading-snug mb-4 md:w-3/5'>Embark on a Path to Mental Wellness</h1>
          <p className='text-lg mb-12 md:pr-8'>At TherapEase, we provide dedicated therapy services to support your journey towards mental wellness. Our mission is to offer compassionate guidance and effective tools to help you manage life's challenges.</p>
          <button className='bg-primary rounded-md py-3.5 px-8 font-medium hover:bg-primary/90'>
            <a href='#contact' className='flex gap-1 items-center'>
              <span className='text-black'>Get Started</span>
              <FaCircleArrowRight className='text-black'/>
            </a>
          </button>
        </div>

        {/* right side */}
        <div className='md:w-1/2 h-full'>
          <img src={heroImage} alt='doctor image' className='object-cover w-full h-[100%]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
