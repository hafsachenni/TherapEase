import React from 'react';
import { FaUser, FaClipboardUser, FaPhone, FaHeartCircleCheck } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div id='contact' className='bg-heroBgClr py-28 flex items-center justify-center px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:w-4/5 mx-auto items-center'>

        {/* left side */}
        <div className='space-y-8'>
          <h2 className='text-4xl font-secondary font-bold mb-4 text-white '>Make an appointment</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
            <div className='flex items-start gap-4'>
              <div className='rounded-full bg-primary p-3 flex items-center justify-center'>
                <FaUser className='text-[#a78d3a]'/>
              </div>

              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>24 Hours Services</h3>
                <p>We're here whenever you need us, offering round-the-clock care and support.</p>
              </div>

            </div>

          </div>

        </div>

        </div>

      </div>
      
    </div>
  )
}

export default ContactUs
