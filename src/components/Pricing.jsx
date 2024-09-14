import React from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/animations';


const pricingPlans = [
  {
    name: 'Essential Package',
    price: '$99',
    description: 'Ideal for individuals starting their journey with mental wellness, offering core resources and support.',
    features: [
      'Monthly guided meditation sessions',
      'Personalized wellness plan',
      'Community support group access',
      'Access to expert webinars and workshops',
    ],
  },
  {
    name: 'Popular Package',
    price: '$199',
    description: 'Ideal for individuals seeking a more in-depth therapeutic experience with additional personalized support.',
    features: [
      'Monthly one-on-one therapy sessions',
      'Personalized wellness strategies',
      'Personalized wellness plan',
      'Access to expert webinars and workshops',
    ],
  },
  {
    name: 'Premium Package',
    price: '$299',
    description: 'Ideal for individuals who want comprehensive support, with premium personalized care.',
    features: [
      'Weekly one-on-one therapy sessions',
      'Personalized therapy interventions',
      'Advanced mental wellness tracking tools',
      '24/7 access to mental wellness experts',
    ],
  },
]



const Pricing = () => {
  const navigate = useNavigate();
  const handleNavigation = (plan) => {
    navigate('/plan-info', {state: {plan}});
};



  return (
    <motion.div
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.7}}
    id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className='mx-auto container px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-secondary font-bold mb-3'>Flexible Pricing for Comprehensive Care</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>We offer flexible pricing options to ensure everyone has access to the care they need. Choose the plan that best fits your personal and financial needs for a tailored wellness experience.</p>
        </div>


        {/* pricing plans*/}
        <div className='flex flex-col md:flex-row gap-8 mx-auto md:w-5/6 pb-12'>
          {pricingPlans.map((plan, index) => (
            <div key={index} className='bg-primary rounded-lg shadow-lg flex-1 p-6'>
              <h3 className='text-2xl font-semibold mb-4'>{plan.name}</h3>
              <hr className='w-24 border border-heroBgClr '/>
              <p className='font-bold text-3xl mb-4'>{plan.price} <span className='font-normal text-lg'>/month</span></p>
              <p className='text-lg mb-4'>{plan.description}</p>
              <ul className='list-disc list-inside space-y-2 mb-6'>
                {
                  plan.features.map((feature, index) => (
                    <li key={index} className='pb-4'>{feature}</li>
                  ))
                }
              </ul>

              <button
              onClick={() => handleNavigation(plan)}
              className='bg-heroBgClr text-white py-2 px-4 rounded hover:bg-heroBgClr/90'>Get Started</button>
            </div>
          ))}

        </div>

      </div>
      
    </motion.div>
  )
}

export default Pricing
