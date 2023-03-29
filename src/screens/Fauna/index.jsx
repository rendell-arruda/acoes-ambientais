import React from 'react';
// import Img1 from '../../assets/images/flora/carousel/banner1920x480TestSquosh.jpg';
// import Img2 from '../../assets/images/flora/carousel/banner1920x480.jpg';
// import Img3 from '../../assets/images/flora/carousel/img1.png';
import CarouselHeader from '../../components/Carousels/CarouselHeader';

export default function Fauna() {
  return (
    <div>
      <h1>Fauna RMB</h1>
      <CarouselHeader
        // img1={Img1}
        // img2={Img2}
        // img3={Img3}
        title="Faunda RMB"
        subtitle="  Descriçao breve do que seria essa pagina da flora com algumas
                  atividades."
        desc1="  Descriçao breve do que seria essa pagina da flora com algumas
        atividades."
        desc2=" Some representative placeholder content for the third slide of
        this carousel."
      />
    </div>
  );
}
