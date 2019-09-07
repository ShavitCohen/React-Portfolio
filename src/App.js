import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import InstallBanner from './components/InstallBanner';
import siteData from './siteData';

export default () => {
  const [installBannerActive, setInstallBannerState] = useState(true);
  const removeBanner = () => setInstallBannerState(false);

  return <div className="App">
    <Header siteData={siteData}/>
    <About siteData={siteData}/>
    <Events siteData={siteData}/>
    <Testimonials siteData={siteData}/>
    <ContactUs siteData={siteData}/>
    <Footer siteData={siteData}/>
    {installBannerActive && <InstallBanner removeBanner={removeBanner}/>}
  </div>
}
