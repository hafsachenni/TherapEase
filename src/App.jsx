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


const App = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
