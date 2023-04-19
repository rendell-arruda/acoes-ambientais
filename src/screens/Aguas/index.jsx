import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import ParallaxImage from '../../components/ParallaxImage';

export default function Aguas() {
  return (
    <div>
      <Header />
      <ParallaxImage img>Águas Subterrâeas e superficiais</ParallaxImage>
      <Footer />
    </div>
  );
}
