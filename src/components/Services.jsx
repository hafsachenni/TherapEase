import React from 'react';
import service1 from '../assets/serviceImage1.webp';
import service2 from '../assets/serviceImage2.webp';
import service3 from '../assets/serviceImage3.webp';
import service4 from '../assets/serviceImage4.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-secondary font-bold text-heroBgClr'>What Can We Do Together</h2>
          <p className='mx-auto md:w-1/2'>Together, we can navigate challenges and build a path to a healthier, more fulfilling life through personalized therapy.</p>
        </div>



        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
    <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Couple Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self Confidence</Tab>
    </TabList>

    <TabPanel>
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='md:w-1/2 rounded-lg p-12 font-secondary'>
          <h3 className='text-4xl font-semibold text-[#a78d3a] mb-4'>Couple Counseling</h3>
          <p className='text-lg mb-8'>We help couples improve communication, resolve conflicts, and strengthen their relationships through tailored, professional therapy that fosters lasting connection and understanding.</p>
          <h4 className='text-2xl text-black mb-4'>Benefits</h4>
          <ul className='list-disc space-y-3 list-inside'>
            <li>Understanding Relationships Dynamic</li>
            <li>Improved Communication</li>
            <li>Conflict Resolution</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={service1} alt='couple counseling service' className='rounded-2xl object-cover w-full h-auto'/>
        </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 rounded-lg p-12 font-secondary '>
        <h3 className='text-4xl font-semibold text-[#a78d3a] mb-4 '>Parenting Skills</h3>
        <p className='mb-8 text-lg'>We offer expert guidance and effective strategies to help parents navigate the challenges of raising children. Our approach fosters a healthy, supportive, and nurturing family environment.</p>
        <h4 className='text-2xl text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Enhanced Communication</li>
          <li>Stronger Family Bonds</li>
          <li>Improved Child Behavior</li>
        </ul>
      </div>
      <div className='md:w-1/2'> 
        <img src={service2} alt="Parenting Skills service" className='w-full h-auto rounded-2xl object-cover'/>
      </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 rounded-lg p-12 font-secondary '>
        <h3 className='text-4xl font-semibold text-[#a78d3a] mb-4 '>Feeling Stuck</h3>
        <p className='mb-8 text-lg'>We assist individuals in breaking free from mental blocks and identifying goals. Our expert guidance helps you overcome feelings of stagnation and regain motivation, providing the clarity and direction needed for a more fulfilling life.</p>
        <h4 className='text-2xl text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Renewed Perspective</li>
          <li>Enhanced Motivation</li>
          <li>Clarity of Goals</li>
        </ul>
      </div>
      <div className='md:w-1/2'> 
        <img src={service3} alt="Feeling Stuck service" className='w-full h-auto rounded-2xl object-cover'/>
      </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 rounded-lg p-12 font-secondary '>
        <h3 className='text-4xl font-semibold text-[#a78d3a] mb-4 '>Self Confidence</h3>
        <p className='mb-8 text-lg'>We provide tools and techniques to boost self-esteem, helping individuals believe in themselves and achieve their full potential. Our approach builds resilience, empowering you to face challenges with confidence.</p>
        <h4 className='text-2xl text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved Self-Esteem</li>
          <li>Enhanced Assertiveness</li>
          <li>Greater Resilience</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={service4} alt="Self confidence service" className='w-full h-auto rounded-2xl object-cover'/>
      </div>
      </div>
    </TabPanel>
  </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
