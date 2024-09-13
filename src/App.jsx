import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectedPlanPage from './components/SelectedPlanPage';
import PaymentPage from './components/PaymentPage';


const App = () => {
  return (
    <BrowserRouter>
    <div className='font-primary overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Services />
            <About />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <ContactUs />
          </>
        }/>
        <Route path='/plan-info' element={<SelectedPlanPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
