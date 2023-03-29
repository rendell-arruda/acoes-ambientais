import React from 'react';

export default function CarouselHeader(props) {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.img1}
              style={{
                maxHeight: '100%',
                width: '100%'
              }}
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props.img2}
              style={{
                maxHeight: '100%',
                width: '100%'
              }}
            />
            <div className="container">
              <div className="carousel-caption">
                {/* <h1>Another example headline.</h1> */}
                <p>{props.desc1}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props.img3}
              style={{
                maxHeight: '100%',
                width: '100%'
              }}
            />
            <div className="container">
              <div className="carousel-caption text-end">
                {/* <h1>One more for good measure.</h1> */}
                <h3 className="">{props.desc2}</h3>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
