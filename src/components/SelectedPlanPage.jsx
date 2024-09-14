import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const SelectedPlanPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const plan = location.state?.plan;
    const handleProceedToPayment = () => {
        navigate('/payment', {state: {plan}})
    }

  return (
    <div className='py-20 container mx-auto mt-32 px-8'>
        <div className='bg-primary p-4 mb-6 rounded-lg text-center'>
            <h2 className='text-3xl font-bold font-secondary'>
                {plan?.name}
            </h2>
            <p className='pt-3 md:w-1/2 mx-auto text-gray-700 mb-4'>
                {plan?.description}
            </p>
            <ul className='space-y-2 list-disc list-inside pt-4 text-left'>
                {plan?.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <p className='mt-6 font-secondary font-bold text-2xl'>
                Price: {plan?.price} <span className="text-lg font-normal">/month</span>
            </p>
        </div>

        <button
        onClick={handleProceedToPayment}
        className='bg-heroBgClr text-white px-4 py-2 rounded hover:bg-heroBgClr/90 w-full md:w-auto'>
            Proceed To Payment
        </button>
    </div>
  )
}

export default SelectedPlanPage
