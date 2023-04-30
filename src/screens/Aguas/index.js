import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import ParallaxImage from '../../components/ParallaxImage';
import ImgCap from '../../assets/images/aguas/capa.jpg';
export default function Aguas() {
  return (
    <div>
      <Header />
      <ParallaxImage img={ImgCap}>
        Águas Subterrâeas e superficiais
      </ParallaxImage>
      <Footer />
    </div>
  );
}
