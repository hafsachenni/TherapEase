import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
        <div className='space-y-6 mr-14'>
          <div className='flex items-center space-x-2'>
            <a href='/'>
              <img src='/logo2.png' alt='footer logo' className='w-[130px] h-[60px]'/>
            </a>
          </div>
          <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo illum, inventore consectetur sint quidem</p>
          <div className='flex space-x-4'>
            <a href='#' className='rounded-full bg-gray-200 text-heroBgClr size-10 flex items-center justify-center hover:bg-gray-300 hover:text-heroBgClr/90'><FaFacebook className='text-xl'/></a>
            <a href='#' className='rounded-full bg-gray-200 text-heroBgClr size-10 flex items-center justify-center hover:bg-gray-300 hover:text-heroBgClr/90'><FaXTwitter className='text-xl'/></a>
            <a href='#' className='rounded-full bg-gray-200 text-heroBgClr size-10 flex items-center justify-center hover:bg-gray-300 hover:text-heroBgClr/90'><IoLogoInstagram className='text-xl'/></a>
            <a href='#' className='rounded-full bg-gray-200 text-heroBgClr size-10 flex items-center justify-center hover:bg-gray-300 hover:text-heroBgClr/90'><IoLogoLinkedin className='text-xl'/></a>
          </div>
        </div>


        <div className='space-y-6'>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-3'>
            <li>
              <a href='#home' className='hover:underline text-gray-700'>Home</a>
            </li>
            <li>
              <a href='#about' className='hover:underline text-gray-700'>About Us</a>
            </li>
            <li>
              <a href='#services' className='hover:underline text-gray-700'>Services</a>
            </li>
            <li>
              <a href='#contact' className='hover:underline text-gray-700'>Contact Us</a>
            </li>
          </ul>
        </div>



        <div className='space-y-6'>
          <h3 className='text-xl font-semibold mb-4'>Support</h3>
          <ul className='space-y-3'>
            <li>
              <a href='#' className='hover:underline text-gray-700'>FAQs</a>
            </li>
            <li>
              <a href='#' className='hover:underline text-gray-700'>Terms of Services</a>
            </li>
            <li>
              <a href='#' className='hover:underline text-gray-700'>Privacy Policy</a>
            </li>
            <li>
              <a href='#' className='hover:underline text-gray-700'>Support Center</a>
            </li>
          </ul>
        </div>


        <div className='space-y-6'>
          <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <FaMapLocationDot className='text-heroBgClr'/>
              <p className='text-gray-700'>123 Serenity Lane, Wellness City</p>
            </li>

            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-heroBgClr'/>
              <p className='text-gray-700'>01246446</p>
            </li>

            <li className='flex items-center gap-2'>
              <MdMarkEmailRead className='text-heroBgClr'/>
              <p className='text-gray-700'>therapease@gmail.com</p>
            </li>
            
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Footer
