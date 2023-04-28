import React from 'react';
import Container from '../../../components/Containes';
import './matrizes.css';
import CopaibaSemente from '../../../assets/images/flora/matrizes/copaiba/copaibaSemente.jpg';
import CopaibaMuda from '../../../assets/images/flora/matrizes/copaiba/copaibaMuda.JPG';
import CopaibaArvore from '../../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';

import { SiGooglemaps } from "react-icons/si";
import { FcGlobe,FcHighPriority,FcCalendar } from "react-icons/fc";
import { TbTrees } from "react-icons/tb";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Amendoin() {
  return (
    <>
      <Header />
      <div className='bg-light'>
        <div className="especie-conteudo bg-especie">
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
                <div className="carousel-item active semente ">
                  <img
                    src={CopaibaSemente}
                    className="d-block w-100"
                    alt="Sementes de Copaíba"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Sementes de Copaiba</h5>
                    <p>Podem ter cerca de 1 cm.</p>
                  </div>
                </div>
                {/* <div className="carousel-item flor">
                  <img
                    src={AcoitaFlor}
                    className="d-block w-100"
                    alt="Flor de açoita cavalo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Flor do Açoita cavalo</h5>
                    <p>Floresce no Periodo de Maio a Agosto.</p>
                  </div>
                </div> */}
                <div className="carousel-item muda">
                  <img
                    src={CopaibaMuda}
                    className="d-block w-100"
                    alt="Muda de Copaíba"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Mudas de Copaíba</h5>
                    <p>Atinge Porte médio adequado em 6 meses .</p>
                  </div>
                </div>
                <div className="carousel-item arvore">
                  <img
                    src={CopaibaArvore}
                    className="d-block w-100"
                    alt="Árvore de Copaíba"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Árvores de Copaíba</h5>
                    <p>Podem ter cerca de 10-15 m.</p>
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
          <div className="px-2">
            <div className='conteudoTextual'>
              <h3 className="pt-4 font-1-xxl">Copaíba</h3>
              <p className="especieText">Copaifera IBngsdorlfii Oesf.</p>
            </div>
            <div className="caractIniciais">
              <ul className="caractIniciais-list">
                <div className="list-item">
                <FcGlobe size={25}/>
                  <li className="caracteristica">
                    <span>Bioma:</span> Cerrado, Mata Atlântica.
                  </li>
                </div>
                <div className="list-item">
                <TbTrees size={26} color={'var(--greenDetail)'}/>
                  <li className="caracteristica">
                    <span>Classe:</span> Clímax
                  </li>
                </div>
                <div className="list-item">
                <FcHighPriority size={25}/>
                  <li className="caracteristica">
                    <span>Conservação:</span> Pouco Preocupante
                  </li>
                </div>
                <div className="list-item">
                <FcCalendar size={25}/>
                  <li className="caracteristica">
                    <span>Coleta:</span> AGO - SET
                  </li>
                </div>
                <div className="list-item">
                <SiGooglemaps size={25} color={'#fff'}/>
                  <a
                    href="https://www.google.com.br/maps/place/23%C2%B023'08.9%22S+47%C2%B037'13.7%22W/@-23.3857941,-47.6230512,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-23.385799!4d-47.6204763"
                    target="_blank"
                  >
                    <li>
                      <b>Matriz:</b> M 248
                    </li>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <Container>
          <section className="py-4">
            <h4 className="fs-5">Caracteristicas Gerais</h4>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Coleta de sementes
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="coleta">
                      <ul className="coleta-list">
                        <li>
                          <b>- Tipo de Semente:</b> Ortodoxa
                        </li>
                        <li>
                          <b>- Síndrome de Dispersão de Semente:</b> Anemocórica
                        </li>
                        <li>
                          - Colher os frutos diretamente das árvores quando
                          iniciarem queda espontânea.
                        </li>
                        <li>- Levar ao sol para abrir.</li>
                        <li>- Frutos amadurecem agosto – Setembro</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Semeadura e Produção de Mudas
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="coleta-list">
                      <li>
                        <b>- Tempo para Emergência:</b> 20 - 40 dias
                      </li>
                      <li>
                        <b>- Taxa de germinação:</b> alta
                      </li>
                      <li>- Transplantar quando maiores de 4 cm.</li>
                      <li>
                        - Podem ir para campo a partir de 6 meses da germinação.
                      </li>
                      <li>
                        - Desenvolvimento rápido na germinação e lento no campo.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Morfológicas
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="coleta-list">
                      <li>- Pode ter de 10-15m e tronco com 50-80cm.</li>
                      <li>- Folhas compostas pinatifidas, com 3-5 jugos.</li>
                      <li>- Utilizada na construção civil.</li>
                      <li>- Fornece bálsamo ou óleo de copaíba.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p>
                Consulte o portal da Embrapa para pesquisa e maiores
                informações:
                <a
                  className="btn btn-link"
                  target={'_blank'}
                  href="https://www.webambiente.cnptia.embrapa.br/publico/especies.xhtml;jsessionid=5d5JmEfW1BcAivQVvPhEeASspllYiwZu07FJsCJI.virt0041"
                >
                  Web Ambiental
                </a>
              </p>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
}
