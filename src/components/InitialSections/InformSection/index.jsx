import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import Img1 from '../../../assets/images/banners/O-RMB.png';
import Img2 from '../../../assets/images/banners/O-RMB2.png';
import Img3 from '../../../assets/images/banners/O-RMB3.png';

export default function InformSection(props) {
  return (
    <div className="">
      <Container>
        <Title title="RMB Informa">
          Curiosidades, links e mensagem do Diretor
        </Title>

        <div className="row align-items-center">
          <div
            id="carouselExampleInterval"
            className="carousel slide col-md-7"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <a href="https://www.gov.br/cnen/pt-br/rmb" target="_blanck">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img
                    src={Img1}
                    className="d-block w-100"
                    alt="O que é o RMB"
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=0fAJ6R4BFp8"
                target="_blank"
              >
                <div className="carousel-item" data-bs-interval="1400">
                  <img src={Img2} className="d-block w-100" alt="..." />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/RMB+-+Bosque+dos+Pioneiros/@-23.3881376,-47.6198094,350m/data=!3m1!1e3!4m15!1m8!3m7!1s0x94c5efc7ecda2e37:0x862df6ca25dd3926!2sRMB+-+Bosque+dos+Pioneiros!8m2!3d-23.3879129!4d-47.6179379!10e5!16s%2Fg%2F11sgvvq__v!3m5!1s0x94c5efc7ecda2e37:0x862df6ca25dd3926!8m2!3d-23.3879129!4d-47.6179379!16s%2Fg%2F11sgvvq__v"
              >
                <div className="carousel-item">
                  <img src={Img3} className="d-block w-100" alt="..." />
                </div>
              </a>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="col-md-4">
            <p>
              " Nossa função é transformar<b> Ciência em Tecnologia</b>,
              desenvolver protótipos e instalações pilotos, e nós temos que
              manter essa competência..." <br />
              <b>José Augusto Perrota - Coord. Técnico do RMB - Set/2020.</b>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
