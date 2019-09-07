import React from 'react';
export default ({ siteData }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          {
            siteData.socialLinks && siteData.socialLinks.map((item, index)=> (
              <li key={index + 1}>
                <a href={item.url}>
                <i className={item.className} />
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
    </div>
  </footer>
);
