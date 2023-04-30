import React from 'react';
import './timeline.css';

export default function Timeline({
  year1,
  img1,
  title1,
  text1,
  year2,
  img2,
  title2,
  text2,
  img3,
  year3,
  title3,
  text3,
  year4,
  img4,
  title4,
  text4
}) {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="section-heading wow fadeIn"></div>
          <div className="row">
            <div className="history-wrapper">
              <div className="title-wrap text-center one-of-two">
                <h2 className="h1 text-secondary mb-0 text-uppercase">
                  Breve Histórico
                </h2>
              </div>
              <div className="timeline-box one-of-two">
                <img
                  className="mb-1-6 rounded img-fluid"
                  src={img1}
                  alt="..."
                />
                <div className="content">
                  <h3 className="h4 mb-2 mb-md-3">{title1}</h3>
                  <p className="mb-0">{text1}</p>
                </div>
                <div className="year">{year1}</div>
              </div>
              <div className="timeline-box one-of-two">
                <img
                  className="mb-1-6 rounded img-fluid"
                  src={img2}
                  alt="..."
                />
                <div className="content">
                  <h3 className="h4 mb-2 mb-md-3">{title2}</h3>
                  <p className="mb-0">{text2}</p>
                </div>
                <div className="year">{year2}</div>
              </div>
              <div className="timeline-box one-of-two">
                <img
                  className="mb-1-6 rounded img-fluid"
                  src={img3}
                  alt="..."
                />
                <div className="content">
                  <h3 className="h4 mb-2 mb-md-3">{title3}</h3>
                  <p className="mb-0">{text3}</p>
                </div>
                <div className="year">{year3}</div>
              </div>
              <div className="timeline-box one-of-two">
                <img
                  className="mb-1-6 rounded img-fluid"
                  src={img4}
                  alt="..."
                />
                <div className="content">
                  <h3 className="h4 mb-2 mb-md-3">{title4}</h3>
                  <p className="mb-0">{text4}</p>
                </div>
                <div className="year">{year4}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
