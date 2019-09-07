import React from 'react';
export default ({ siteData }) => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col">
          <h1><span>Client Testimonials</span></h1>
        </div>
        <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              {
                siteData.testimonials && siteData.testimonials.map((item, index)=> (
                  <li key={index + 1}>
                    <blockquote>
                      <p>
                      {item.description}
                      </p>
                      <cite>{item.name}</cite>
                    </blockquote>
                  </li>
                ))
              }
            </ul>
          </div> {/* div.flexslider ends */}
        </div> {/* div.flex-container ends */}
      </div> {/* row ends */}
    </div>  {/* text-container ends */}
  </section>
);
