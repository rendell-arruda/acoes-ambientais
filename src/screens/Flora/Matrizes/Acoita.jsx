import React from 'react';
import Container from '../../../components/Containes';
import './matrizes.css';
import AcoitaArvore from '../../../assets/images/flora/matrizes/acoita/acoitaArvore.jpg';
import AcoitaFlor from '../../../assets/images/flora/matrizes/acoita/acoitaflor.jpg';
import AcoitaMuda from '../../../assets/images/flora/matrizes/acoita/acoitaMuda.jpg';
import AcoitaSemente from '../../../assets/images/flora/matrizes/acoita/sementes.jpg';
import IconMap from '../../../assets/images/icons/iconMap.png';
export default function Acoita() {
  return (
    <Container>
      <div className="especie-conteudo">
        <div className="slider-especie">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active semente">
                <img
                  src={AcoitaSemente}
                  className="d-block w-100"
                  alt="Sementes de Açoita cavalo"
                />
                <div className="carousel-caption d-none d-md-block bg-caption">
                  <h5>Sementes de Açoita Cavalo</h5>
                  <p>Podem ter cerca de 1 cm.</p>
                </div>
              </div>
              <div className="carousel-item flor">
                <img
                  src={AcoitaFlor}
                  className="d-block w-100"
                  alt="Flor de açoita cavalo"
                />
                <div className="carousel-caption d-none d-md-block bg-caption">
                  <h5>Flor do Açoita cavalo</h5>
                  <p>Floresce no Periodo de Maio a Agosto.</p>
                </div>
              </div>
              <div className="carousel-item muda">
                <img
                  src={AcoitaMuda}
                  className="d-block w-100"
                  alt="Muda de açoita cavalo"
                />
                <div className="carousel-caption d-none d-md-block bg-caption">
                  <h5>Mudas de Açoita Cavalo</h5>
                  <p>Atinge Porte médio adequado em 6 meses .</p>
                </div>
              </div>
              <div className="carousel-item arvore">
                <img
                  src={AcoitaArvore}
                  className="d-block w-100"
                  alt="Árvore de Açoita Cavalo"
                />
                <div className="carousel-caption d-none d-md-block bg-caption">
                  <h5>Árvores de Açoita Cavalo</h5>
                  <p>Podem ter cerca de 30 m.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="conteudoTextual">
          <div>
            <h3 className="title">Açoita Cavalo</h3>
            <p className="especieText">Luehea divaricata Mart & Zucc.</p>
          </div>
          <div className="caractIniciais">
            <ul className="caractIniciais-list">
              <div className="list-item">
                <div className=" text-bg-primary bg-gradient rounded-3">
                  <img src={IconMap} />
                </div>
                <li className="caracteristica">
                  <b>Bioma:</b> Cerrado, Mata Atlântica e Pampa
                </li>
              </div>
              <div className="list-item">
                <div className=" text-bg-primary bg-gradient rounded-3">
                  <img src={IconMap} />
                </div>
                <li className="caracteristica">
                  <b>Classe:</b> Secundária
                </li>
              </div>
              <div className="list-item">
                <div className=" text-bg-primary bg-gradient rounded-3">
                  <img src={IconMap} />
                </div>
                <li className="caracteristica">
                  <b>Conservação:</b> Pouco preocupante
                </li>
              </div>
              <div className="list-item">
                <div className=" text-bg-primary bg-gradient rounded-3">
                  <img src={IconMap} />
                </div>
                <li className="caracteristica">
                  <b>Coleta:</b> MAI - AGO
                </li>
              </div>
              <div>
                <a
                  className="list-item"
                  href="https://www.google.com.br/maps/place/23%C2%B023'17.2%22S+47%C2%B037'09.5%22W/@-23.3880778,-47.6197675,166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x7aa73cbc8955f778!8m2!3d-23.3881!4d-47.6193"
                  target="_blank"
                >
                  <div className=" text-bg-primary bg-gradient rounded-3">
                    <img src={IconMap} />
                  </div>
                  <li className="caracteristica">
                    <b>Matriz:</b> M 2082
                  </li>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
