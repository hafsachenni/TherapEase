import React from 'react'

const HowItWorks = () => {
  return (
    <div className='bg-working-img bg-cover bg-center relative py-12'>
      <div className='bg-[#333333] inset-0 bg-opacity-90 absolute'></div>
        <div className='relative container mx-auto px-4 py-28'>
          <div className='mb-28 text-center text-white'>
            <h2 className='text-4xl font-secondary font-bold mb-4'>How It Works</h2>
            <p className=' text-lg md:w-1/2 w-full mx-auto'>Discover how our streamlined process guides you through every step, from initial consultation to personalized therapy sessions. Our approach ensures a smooth and supportive experience tailored to your needs.</p>
          </div>


          <div className='flex flex-col md:flex-row mx-auto md:w-4/5 gap-8'>
            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bea759] text-white size-14 rounded-full flex items-center justify-center'>1</div>
                <h3 className='text-lg font-medium mt-8'>Fill Out a Form</h3>
                <p className='my-2'>Complete a short form to share your needs, preferences, and goals with us.</p>
            </div>


            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bea759] text-white size-14 rounded-full flex items-center justify-center'>2</div>
                <h3 className='text-lg font-medium mt-8'>Schedule Your Session</h3>
                <p className='my-2'>Choose a convenient time for your consultation from our online scheduling calendar.</p>
            </div>


            <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bea759] text-white size-14 rounded-full flex items-center justify-center'>3</div>
                <h3 className='text-lg font-medium mt-8'>Start Your Journey</h3>
                <p className='my-2'>Begin working with your therapist to achieve your wellness and personal growth goals.</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default HowItWorks
