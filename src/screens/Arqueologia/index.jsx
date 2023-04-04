import React from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import Timeline from '../../components/Timeline';
import img1 from '../../assets/images/arqueologia/slider1.jpg';
import img2 from '../../assets/images/arqueologia/slider2.jpg';
import img3 from '../../assets/images/arqueologia/slider3.jpg';
import timeline1 from '../../assets/images/arqueologia/timeline1.jpg';
import timeline2 from '../../assets/images/arqueologia/timeline2.jpg';
import timeline3 from '../../assets/images/arqueologia/timeline3.jpg';
import timeline4 from '../../assets/images/arqueologia/timeline3.jpg';

export default function Arqueologia() {
  return (
    <div>
      <CarouselHeader
        img1={img1}
        img2={img2}
        img3={img3}
        title="Sítio Arqueológico Jibóia I"
        subtitle="  Descriçao breve do que seria essa pagina do sitio arque com algumas
              atividades."
        desc1="  Descriçao breve do que seria essa pagina da flora com algumas
    atividades."
        desc2=" Some representative placeholder content for the third slide of
    this carousel."
      />
      <Container>
        <Timeline
          img1={timeline1}
          img2={timeline2}
          img3={timeline3}
          img4={timeline4}
        />
      </Container>
    </div>
  );
}
