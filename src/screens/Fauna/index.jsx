import React from 'react';
import Img1 from '../../assets/images/fauna/Capa1.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CarouselHeader from '../../components/Carousels/CarouselHeader';
import ParallaxImage from '../../components/ParallaxImage';

export default function Fauna() {
  return (
    <>
      <Header />
      <div className="bg-gray">
        <ParallaxImage img={Img1}> Fauna RMB</ParallaxImage>
      </div>
      <Footer />
    </>
  );
}
