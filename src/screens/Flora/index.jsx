import React from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Img1 from '../../assets/images/flora/carousel/banner1920x480TestSquosh.jpg';
import Img2 from '../../assets/images/flora/carousel/banner1920x480.jpg';
import Img3 from '../../assets/images/flora/carousel/img1.png';

export default function Flora() {
  return (
    <div>
      <CarouselHeader img1={Img1} img2={Img2} img3={Img3} />
    </div>
  );
}
