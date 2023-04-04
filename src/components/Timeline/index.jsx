import React from 'react';
import './timeline.css';

export default function Timeline({ img1, img2, img3, img4 }) {
  return (
    <>
      <section>
        <div class="container ">
          <div class="section-heading wow fadeIn">
            <h2>Breve Histórico</h2>
            <div class="heading-separator"></div>
          </div>
          <div class="row">
            <div class="history-wrapper">
              <div class="title-wrap text-center one-of-two">
                <h2 class="h1 text-secondary mb-0 text-uppercase">
                  Sítio Arqueológico
                </h2>
                <p class="fs-3 font-weight-500">Jibóia I</p>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded" src={img1} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">Diagnóstico Arqueológico</h3>
                  <p class="mb-0">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum
                  </p>
                </div>
                <div class="year">2013</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded" src={img2} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">
                    Increase employee by 6 members
                  </h3>
                  <p class="mb-0">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum
                  </p>
                </div>
                <div class="year">2019</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded" src={img3} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">We win the national awards</h3>
                  <p class="mb-0">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum
                  </p>
                </div>
                <div class="year">2020</div>
              </div>
              <div class="timeline-box one-of-two">
                <img class="mb-1-6 rounded" src={img4} alt="..." />
                <div class="content">
                  <h3 class="h4 mb-2 mb-md-3">
                    Branches open in International
                  </h3>
                  <p class="mb-0">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum
                  </p>
                </div>
                <div class="year">2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
