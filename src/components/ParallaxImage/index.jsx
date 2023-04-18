import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImage = ({ img, children }) => {
  return (
    <Parallax bgImage={img} strength={200} className="background-size-cover ">
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: 400 }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '60px',
            padding: '8px',
            fontFamily: 'Inter'
          }}
        >
          {children}
        </h1>
      </div>
    </Parallax>
  );
};

export default ParallaxImage;
