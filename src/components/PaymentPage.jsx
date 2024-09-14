import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';




const PaymentPage = () => {
  const location = useLocation();
  const data = location.state?.plan;



  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [paymodal, setPaymodal] = useState(false)


  const handleSumbit = (e) => {
    e.preventDefault();
    if (name || cardNumber || expiryDate || cvv){
    setPaymodal(true);
  }
}

  const closePaymodal = () => {
    setName('');
    setPaymodal(false);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  }

  return (
    <div className='py-16 px-8 container mx-auto bg-white mt-20'>
      <form className='max-w-lg mx-auto bg-white p-8 py-20 rounded-lg shadow-lg'
      onSubmit={handleSumbit}>
        <div className='mb-4'>
          <label className='block text-sm font-medium'>Name On Card</label>
          <input 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder='Name on card'
          className='w-full mt-2 p-2 rounded-lg'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium'>Card Number</label>
          <input 
          type='number'
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
          required
          placeholder='1234 5678 9101 1121'
          className='w-full mt-2 p-2 rounded-lg'
          />
        </div>

        <div className='flex mb-4'>
          <div className='flex-1'>
            <label className='block text-sm font-medium'>Expiry Date</label>
            <input
            type='number'
            value={expiryDate}
            onChange={e => setExpiryDate(e.target.value)}
            required
            placeholder='MM/YY'
            className='w-full p-2 mt-2 rounded-lg'
            />
          </div>

        <div className='flex-1'>
          <label className='block text-sm font-medium'>CVV</label>
          <input
          type='number'
          value={cvv}
          onChange={e => setCvv(e.target.value)}
          required
          placeholder='123'
          className='w-full p-2 mt-2 rounded-lg'
          />
        </div>
        </div>

        <button type='submit'
        className='w-full bg-heroBgClr text-white py-2 rounded-lg hover:bg-heroBgClr/90'>Confirm Payment</button>
      </form>
      <div className='text-center mt-5'>
        <Link to='/' className='text-heroBgClr underline hover:text-heroBgClr/90'>
        Go back to home</Link>
      </div>
      
      
      {paymodal && (
        <div className='bg-black inset-0 fixed bg-opacity-90 flex items-center justify-center'>
          <div className='p-8 m-4 bg-white rounded-md shadow-lg'>
            <h2 className='text-2xl font-secondary font-bold text-left'>Payment Successful!</h2>
            <p className='mt-4 text-center text-gray-700'>Congratulations on your purchase! Your <span className='font-semibold'>{data?.name}</span> plan is now active. Happy Therapy!</p>
            <button className='mt-4 px-4 py-2 bg-heroBgClr text-white rounded-md hover:bg-heroBgClr/90'
            onClick={closePaymodal}
            >
              Close
            </button>

          </div>

        </div>
      )}
    </div>
  )
}

export default PaymentPage
