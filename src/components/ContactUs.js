import React from 'react';
export default ({ siteData }) => (
  <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
          Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>Linked in :
              {siteData.linkedinId}
            </h4>
          </div>
        </aside>
      </div>
    </section>
    );
