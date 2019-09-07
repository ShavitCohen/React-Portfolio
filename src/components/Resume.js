import React from 'react';
export default ({ siteData }) => (
  <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
            <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          {
            siteData.education && siteData.education.map((item, index) => (
              <div key={index + 1} className="row item" >
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                    <p>
                    {item.Achievements}
                    </p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    <div className="row work">
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {
            siteData.work && siteData.work.map((item, index) => (
              <div key={index + 1} className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                    <p>
                    {item.Achievements}
                    </p>
                  </div>
              </div>
            ))
          }
        </div> 
      </div>
      <div className="row skill">
        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
            <p>
            {siteData.skillsDescription}
            </p>
      <div className="bars">
          <ul className="skills">
            {
              siteData.skills && siteData.skills.map((item, index) => (
                <li key={index + 1}>
                <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                </span><em>{item.skillname}</em>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
      </div>
  </section>
);
