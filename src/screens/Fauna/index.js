import React from 'react';
import Img1 from '../../assets/images/fauna/Capa1.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParallaxImage from '../../components/ParallaxImage';
import Container from '../../components/Containes';
import BtnTooltip from '../../components/Buttons/BtnTooltip';
import Mapherpetofauna from '../../assets/images/fauna/capaHerpetofauna.png';
import MapAvifauna from '../../assets/images/fauna/capaAvifauna.png';
import Title from '../../components/Texts/Title';

export default function Fauna() {
  return (
    <>
      <Header />
      <div className="bg-gray">
        <ParallaxImage img={Img1}> Fauna RMB</ParallaxImage>
      </div>
      <Container>
        <Title title="Mapas de Amostragem">
          {/* Conheça as áreas de XXX e Rustificação do Viveiro */}
        </Title>
        <div>
          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Herpetofauna e Mastofauna
                  </strong>
                  {/* <h3 class="mb-0"> Herpetofauna e Mastofauna</h3> */}
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  <p class="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <BtnTooltip
                    target="_blank"
                    tip="1.1MB"
                    title="Acessar mapa"
                    link="https://drive.google.com/file/d/1xkDx3eYrX7JRpQQMXtny1TIvLrZQd8OD/view?usp=sharing"
                  />
                </div>
                <div class="col-auto d-none d-lg-block">
                  <img src={Mapherpetofauna} />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Avifauna
                  </strong>
                  {/* <h3 class="mb-0"> Avifauna </h3> */}
                  {/* <div class="mb-1 text-muted">Nov 11</div> */}
                  <p class="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <BtnTooltip
                    tip="1.4MB"
                    target="_blank"
                    title="Acessar mapa"
                    link="https://drive.google.com/file/d/11uT2KdOtgB_pfAk-ZfQ2G97u9TXoPBnd/view?usp=sharing"
                  />
                </div>
                <div class="col-auto d-none d-lg-block">
                  <img src={MapAvifauna} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
