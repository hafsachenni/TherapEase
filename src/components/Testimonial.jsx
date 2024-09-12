import React from 'react';
import { IoChatboxEllipses } from "react-icons/io5";
import review1 from '../assets/reviewImage1.webp';
import review2 from '../assets/reviewImage2.webp';


const testimonials = [
  {
    name: 'Sarah & John D',
    location: 'Austin, Texas',
    review: 'TherapEase has been a game-changer for my relationship. The couple counseling sessions helped us communicate better and rebuild trust. We are stronger and happier than ever!',
    image: review1,
  },
  {
    name: 'Michael R',
    location: 'Chicago, Illinois',
    review: 'I was feeling lost and unmotivated, but TherapEase guided me through my struggles. With their support, I have found clarity, confidence and a renewed sense of purpose in my life.',
    image: review2,
  },
]



const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto pb-20'>
        <div className='text-center'>
          <h2 className='text-4xl font-secondary font-bold mb-3'>Our Client's Success Stories</h2>
          <p className='md:w-1/2 mx-auto text-lg mb-12'>Discover how our clients have transformed their lives through our tailored therapy sessions, overcoming challenges and achieving personal growth.</p>
        </div>


        <div className='flex flex-col md:flex-row md:w-4/5 mx-auto md:gap-12 gap-8'>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='bg-white rounded-lg relative flex-1 p-6 shadow-2xl'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                  <IoChatboxEllipses className='size-12 text-[#bea759]'/>
                </div>

                <div className='flex flex-col space-y-3 mb-4'>
                  <p className='text-lg mb-2'>{testimonial.review}</p>
                  <div className='flex gap-1'>
                    <img src={testimonial.image} alt='client' className='rounded-full size-16 mr-4 object-cover'/>
                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                </div>

              </div>
              </div>
            ))
          }
        </div>

      </div>
      
    </div>
  )
}

export default Testimonial
