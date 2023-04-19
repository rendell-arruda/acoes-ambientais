import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImage = ({ img, children }) => {
  return (
    <Parallax
      bgImage={img}
      strength={200}
      className="background-size-cover "
      blur={{ min: -15, max: 15 }}
    >
      <div
        className="d-flex align-items-center justify-content-center p-4 "
        style={{ height: 400 }}
      >
        <h1
          className="font-1-xxl"
          style={{
            color: '#fff',
            fontSize: '3.125rem'
          }}
        >
          {children}
        </h1>
      </div>
    </Parallax>
  );
};

export default ParallaxImage;
