import React, { useState } from 'react';
import videoCover from '../assets/video-thumbnail.webp';
import { CiPlay1 } from "react-icons/ci";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/animations';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }
  const navigate = useNavigate();
  const navigationToAbout = () => {
    navigate('about-us');
    window.scrollTo(0, 0);
  }

  return (
    <div id='about' className='bg-[#f7f8fc] pt-20 pb-16'>
      <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>

          {/* left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img src={videoCover} alt='video cover' className='w-full rounded-lg md:h-[446px] h-auto object-cover '/>
                  <button
                  onClick={handleVideoPlay}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black p-3 rounded-full shadow-lg cursor-pointer hover:bg-black/80'
                  >
                  <CiPlay1 className='size-12 text-[#dfc572]'/>
                  </button>
                </div>
              ) : (null)
            }
          </div>



          {/*right side */}
          <div className='md:w-1/2 w-full'>
            <h2 className='text-4xl font-secondary capitalize font-bold leading-snug mb-4'>Personalized Therapy and Support</h2>
            <p className='text-lg mb-12 md:pr-8'>At TherapEase, we provide dedicated therapy services to support your journey towards mental wellness. Our mission is to offer compassionate guidance and effective tools to help you manage life's challenges.</p>
            <button
            onClick={navigationToAbout}
            className='bg-[#bea759] rounded-md py-3.5 px-8 font-medium hover:bg-[#bea759]/90'>
              <div className='flex items-center gap-1'>
                <span className='text-black'>Read more</span>
                <FaCircleArrowRight className='text-black'/>
              </div>
            </button>
          </div>
        </div>

        {
          isVideoPlaying && (
            <div className='bg-black bg-opacity-75 inset-0 fixed flex items-center justify-center z-50'>
              <div className='relative w-full h-full flex items-center justify-center'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7LD8iC4NqXM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-lg'></iframe>
              <button onClick={handleCloseVideo} className='absolute text-white top-4 right-4 text-2xl cursor-pointer'>Close</button>
              </div>
            </div>
          )
        }
      </motion.div>
    </div>
  )
}

export default About
