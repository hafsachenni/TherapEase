import React from 'react';
import missionImage from '../assets/serviceImage2.webp';
import teamImage from '../assets/ourTeam.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const AboutUsPage = () => {
  return (
    <div className='bg-[#f7f8fc] py-16 md:py-20 m-20'>
      <div className='container mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center p-[7rem] flex items-center justify-center'>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='text-4xl md:text-6xl font-bold font-secondary  text-heroBgClr leading-tight tracking-tight drop-shadow-xl '
          >
            About ThreapEase
          </motion.h1>
          
        </div>

        {/* Mission Section */}
        <div className='md:flex md:items-center mb-16 p-6 md:p-8'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='md:w-1/2 mb-8 md:mb-0'
          >
            <img
              src={missionImage}
              alt='Our Mission'
              className='w-full rounded-xl md:rounded-2xl md:h-[500px] h-auto object-cover shadow-lg'
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='md:w-1/2 md:pl-10'
          >
            <h2 className='text-3xl font-bold font-secondary mb-4 text-black leading-snug'>
              Our Mission
            </h2>
            <p className='text-lg md:text-xl text-gray-700 font-secondary leading-relaxed'>
              Our mission is to make mental health support accessible to everyone. We strive to offer
              a safe, non-judgmental space where individuals can connect with certified therapists
              and explore the best strategies for their mental well-being.
            </p>
            <p className='mt-4 text-lg md:text-xl text-gray-700 font-secondary leading-relaxed'>
              Through tailored therapy sessions and flexible subscription plans, Threapease is here to
              guide you every step of the way on your journey to a healthier mind.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='md:flex md:items-center mb-16 p-6 md:p-8'
        >
          <div className='md:w-1/2 md:pr-10'>
            <h2 className='text-3xl font-bold font-secondary mb-4 text-black leading-snug'>
              Meet Our Team
            </h2>
            <p className='text-lg md:text-xl text-gray-700 font-secondary leading-relaxed'>
              Our team of experienced mental health professionals is dedicated to providing you with
              the support and resources you need. Each therapist brings their unique expertise, ensuring
              you receive the highest quality of care, personalized to your journey.
            </p>
            <p className='mt-4 text-lg md:text-xl text-gray-700 font-secondary leading-relaxed'>
              At Threapease, we’re passionate about helping you achieve mental wellness, one step at a time.
            </p>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <img
              src={teamImage}
              alt='Our Team'
              className='w-full rounded-full md:h-[500px] h-auto object-cover shadow-lg'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
