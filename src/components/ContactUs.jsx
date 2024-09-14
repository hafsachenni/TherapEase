import React, { useState } from 'react';
import { FaUser, FaClipboardUser, FaPhone, FaHeartCircleCheck } from "react-icons/fa6";




const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [therapist, setTherapist] = useState('');
  const [modal, setModal] = useState(false);

const handleSubmitButton = (e) => {
  e.preventDefault();

  if (!name || !email || !phone || !country || !message || !therapist){
    alert('Please fill all fields');
    return;
  }

  setModal(true);
}


const closeModal = () => {
  setModal(false);
  setName('');
  setEmail('');
  setPhone('');
  setCountry('');
  setMessage('');
  setTherapist('');
}

  return (
    <div id='contact' className='bg-heroBgClr py-28 flex items-center justify-center px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:w-4/5 mx-auto items-center'>
          {/* Left side */}
          <div className='space-y-8'>
            <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>

                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-primary p-3'>
                        <FaUser className='text-[#a78d3a]'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>24 Hours Services</h3>
                        <p>We're here whenever you need us, offering round-the-clock care and support.</p>
                    </div>
                </div>

                
                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-primary p-3'>
                        <FaClipboardUser className='text-[#a78d3a]'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Expert Therapist</h3>
                        <p>Receive guidance from highly qualified therapists dedicated to your well-being.</p>
                    </div>
                </div>


                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-primary p-3'>
                        <FaPhone className='text-[#a78d3a]'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>High Quality Care</h3>
                        <p>Experience personalized care tailored to your specific needs and goals.</p>
                    </div>
                </div>


                <div className='flex items-start gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-primary p-3'>
                        <FaHeartCircleCheck className='text-[#a78d3a]'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                        <p>Join the many who trust us to provide a safe environment for mental health care.</p>
                    </div>
                </div>
              </div>
            </div>




            {/*right side */}
            <div className='bg-white rounded-md p-8 space-y-8'>
              <h3 className='mb-4 text-2xl font-bold font-secondary'>Book an Appointment</h3>
              <form onSubmit={handleSubmitButton} className='space-y-8'>
                <div className='flex sm:flex-row flex-col gap-4'>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Name'
                    className='w-full p-4 focus:outline-none rounded-md focus:ring-2 focus:ring-[#a78d3a] shadow'
                  />
                  <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  placeholder='Email Address'
                  className='w-full p-4 focus:outline-none rounded-md focus:ring-2 shadow focus:ring-[#a78d3a]'
                  />
                </div>

                <div className='flex sm:flex-row flex-col gap-4'>
                  <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type='tel'
                  placeholder='Telephone Number'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a78d3a] shadow'
                  />
                  <input
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  type='text'
                  placeholder='Country'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a78d3a] shadow'
                  />
                </div>

                {/* therapists dropdown */}
                <select
                  value={therapist}
                  onChange={e => setTherapist(e.target.value)}
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a78d3a] shadow text-gray-400'>
                    <option value=''>Select a Therapist</option>
                    <option value='Dr. Alice Johnson'>Dr. Alice Johnson (Couple Counseling)</option>
                    <option value='Dr. Mark Smith'>Dr. Mark Smith (Parenting Support)</option>
                    <option value='Dr. Emily Davis'>Dr. Emily Davis (Overcoming Stagnation)</option>
                    <option value='Dr. Michael Brown'>Dr. Michael Brown (Boosting Confidence)</option>
                </select>

                <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows='4'
                placeholder='Briefly describe your concern...'
                className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a78d3a] shadow'
                ></textarea>
                <button className='bg-[#bea759] p-3 rounded-md text-white w-full hover:bg-[#bea759]/90'
                onClick={handleSubmitButton}
                type='submit'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>



        {/*model */}
        {modal && (
          <div className='fixed inset-0 flex bg-black bg-opacity-90 items-center justify-center'>
            <div className='bg-white p-8 m-4 rounded-md shadow-lg'>
              <h2 className='font-bold text-2xl mb-4 font-secondary'>Thank you!</h2>
              <p>Thank you {name}. Your submission has been received. {therapist} will be in touch with you shortly.</p>
              <button className='mt-4 px-4 py-2 bg-heroBgClr text-white rounded-md hover:bg-heroBgClr/90'
              onClick={closeModal}
              >Close</button>

            </div>
          </div>
        )}

        </div>
  )
}

export default ContactUs
