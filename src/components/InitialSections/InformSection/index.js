import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import Img1 from '../../../assets/images/banners/O-RMB.png';
import Img2 from '../../../assets/images/banners/O-RMB2.png';
import Img3 from '../../../assets/images/banners/O-RMB3.png';

import CarouselInterval from '../../Carousels/CarouselInterval';

export default function InformSection(props) {
  return (
    <div className="">
      <Container>
        <Title title="RMB Informa">Curiosidades e links</Title>

        <div className="row align-items-center pt-4">
          {/* CAROUSEL INTERVAL */}
          <div className="col-md-7">
            <CarouselInterval
              carouselImg1={Img1}
              link1="https://www.gov.br/cnen/pt-br/rmb"
              carouselImg2={Img2}
              link2="https://www.youtube.com/watch?v=0fAJ6R4BFp8"
              carouselImg3={Img3}
              link3="https://www.google.com/maps/place/RMB+-+Bosque+dos+Pioneiros/@-23.3881376,-47.6198094,350m/"
            />
          </div>
          <div className="col-md-5 py-4">
            <p>
              " Nossa função é transformar <b>Ciência em Tecnologia </b>
              desenvolver protótipos e instalações pilotos, e nós temos que
              manter essa competência..."
              <b>José Augusto Perrota - Coord. Técnico do RMB - Set/2020.</b>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
