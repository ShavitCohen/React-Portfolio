import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import siteData from './siteData';
export default () => (
  <div className="App">
    <Header siteData={siteData}/>
    <About siteData={siteData}/>
    <Resume siteData={siteData}/>
    <Portfolio siteData={siteData}/>
    <Testimonials siteData={siteData}/>
    <ContactUs siteData={siteData}/>
    <Footer siteData={siteData}/>
  </div>
);
