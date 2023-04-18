import React from 'react';
import Img1 from '../../assets/images/fauna/slider1.png';

import CarouselHeader from '../../components/Carousels/CarouselHeader';
import ParallaxImage from '../../components/ParallaxImage';

export default function Fauna() {
  return (
    <div className="bg-gray">
      <ParallaxImage img={Img1}> Fauna RMB</ParallaxImage>
    </div>
  );
}
