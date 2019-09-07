import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    const siteData = this.props.siteData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              siteData.socialLinks && siteData.socialLinks.map((item, index)=>{
                return(
                  <li key={index + 1}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
