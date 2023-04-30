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
        <div class="container-fluid">
          <div class="section-heading wow fadeIn">
            {/* <h2> Sítio Arqueológico</h2> */}
            {/* <div class="heading-separator"></div> */}
          </div>
          <div class="row">
            <div class="history-wrapper">
              <div class="title-wrap text-center one-of-two">
                <h2 class="h1 text-secondary mb-0 text-uppercase">
                  Breve Histórico
                </h2>
                {/* <p class="fs-3 font-weight-500">Jibóia I</p> */}
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded img-fluid" src={img1} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">{title1}</h3>
                  <p class="mb-0">{text1}</p>
                </div>
                <div class="year">{year1}</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded img-fluid" src={img2} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">{title2}</h3>
                  <p class="mb-0">{text2}</p>
                </div>
                <div class="year">{year2}</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded img-fluid" src={img3} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">{title3}</h3>
                  <p class="mb-0">{text3}</p>
                </div>
                <div class="year">{year3}</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded img-fluid" src={img4} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">{title4}</h3>
                  <p class="mb-0">{text4}</p>
                </div>
                <div class="year">{year4}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
