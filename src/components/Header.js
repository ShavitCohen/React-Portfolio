import React from 'react';
export default ({ siteData }) => (
  <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#/" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home" title="Home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Events
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <div className="row banner">           
      <div className="banner-text">           
        <h1 className="responsive-headline">We Are {siteData.name}.</h1>
        <h3 style={{color: '#fff', fontFamily: 'sans-serif '}}>
          {siteData.role}.{siteData.roleDescription}
        </h3>
        <hr />
        <ul className="social">
          {siteData.socialLinks &&
            siteData.socialLinks.map(item => {
              return (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.className}></i>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
    <p className="scrolldown">
      <a className="smoothscroll" href="#about">
        <i className="icon-down-circle"></i>
      </a>
    </p>
  </header>
);
