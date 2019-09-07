import React from 'react';
export default ({ siteData }) => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Upcoming events</h1>
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {
          siteData.portfolio && siteData.portfolio.map((item, index) => (
            <div key={index + 1} className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={`${item.imgurl}`} className="item-img" alt={item.description}/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  </section>
);
