import React from 'react';
import Header from './components/Header';
import About from './components/About';
// import Resume from './components/Resume';
import Events from './components/Events';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import siteData from './siteData';
export default () => (
  <div className="App">
    <Header siteData={siteData}/>
    <About siteData={siteData}/>
    <Events siteData={siteData}/>
    {/* <Resume siteData={siteData}/> */}
    <Testimonials siteData={siteData}/>
    <ContactUs siteData={siteData}/>
    <Footer siteData={siteData}/>
  </div>
);
