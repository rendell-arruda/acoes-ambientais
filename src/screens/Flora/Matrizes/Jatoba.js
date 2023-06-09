import React from 'react';
import Container from '../../../components/Containes';
import './matrizes.css';
import JatobaSemente from '../../../assets/images/flora/matrizes/jatoba/jatobaSemente.JPG';
import JatobaMuda from '../../../assets/images/flora/matrizes/jatoba/jatobaMuda.JPG';
import JatobaArvore from '../../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { TbTrees } from 'react-icons/tb';
import { SiGooglemaps } from 'react-icons/si';
import { FcGlobe, FcHighPriority, FcCalendar } from 'react-icons/fc';

export default function Amendoin() {
  return (
    <>
      <Header />
      <div className="bg-light">
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
                    src={JatobaSemente}
                    className="d-block w-100"
                    alt="Sementes de Jatobá"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Sementes de Jatoba podem ter cerca de 2 cm.</h5>
                  </div>
                </div>
                {/* <div className="carousel-item flor">
                  <img
                    src={AcoitaFlor}
                    className="d-block w-100"
                    alt="Flor de açoita cavalo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>A Flor do Jatobá floresce no Periodo de Maio a Agosto.</h5>
                  </div>
                </div> */}
                <div className="carousel-item muda">
                  <img
                    src={JatobaMuda}
                    className="d-block w-100"
                    alt="Muda de Jatobá"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>
                      Mudas de Jatobá atingem seu Porte médio adequado em 6
                      meses .
                    </h5>
                  </div>
                </div>
                <div className="carousel-item arvore">
                  <img
                    src={JatobaArvore}
                    className="d-block w-100"
                    alt="Árvore de Jatobá"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Árvores de Jatobá podem ter cerca de 15-20 m.</h5>
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
            <div className="conteudoTextual">
              <h3 className="pt-4 font-1-xxl">Jatobá</h3>
              <p className="especieText">Hymenaea courbaril.</p>
            </div>
            <div className="caractIniciais">
              <ul className="caractIniciais-list">
                <div className="list-item">
                  <FcGlobe size={25} />
                  <li className="caracteristica">
                    <span>Bioma:</span> Cerrado, Mata Atlântica e Pampa
                  </li>
                </div>
                <div className="list-item">
                  <TbTrees size={26} color={'var(--greenDetail)'} />
                  <li className="caracteristica">
                    <span>Classe:</span> Secundária tardia ou Clímax
                  </li>
                </div>
                <div className="list-item">
                  <FcHighPriority size={25} />
                  <li className="caracteristica">
                    <span>Conservação:</span> Preocupante
                  </li>
                </div>
                <div className="list-item">
                  <FcCalendar size={25} />
                  <li className="caracteristica">
                    <span>Coleta:</span> JUN - JUL
                  </li>
                </div>
                <div className="list-item">
                  <SiGooglemaps size={25} color={'#fff'} />
                  <a
                    href="https://www.google.com.br/maps/place/23%C2%B023'00.6%22S+47%C2%B037'25.0%22W/@-23.4053256,-47.625836,17z/data=!4m4!3m3!8m2!3d-23.3835!4d-47.6236"
                    target="_blank"
                  >
                    <li>
                      <b>Matriz:</b> M 262
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
          <section className="pt-4">
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
                          <b>- Síndrome de Dispersão de Semente:</b> Zoocórica.
                        </li>
                        <li>
                          - Colher os frutos diretamente das árvores quando
                          iniciarem queda espontânea.
                        </li>
                        <li>
                          - Levar ao sol para secar e abrir manualmente para
                          retirada da semente.
                        </li>
                        <li>- Emergência entre 12-18 dias</li>
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
                      <li>- Taxa de germinação alta</li>
                      <li>- Transplantar quando maiores de 4 cm.</li>
                      <li>
                        - Podem ir para campo a partir de 6 mês da germinação
                      </li>
                      <li>
                        - Desenvolvimento rápido na germinação e moderado no
                        campo.
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
                      <li>- Médio a grande porte - Pode chegar a 15-20m.</li>
                      <li>- Tronco 1m.</li>
                      <li>
                        - Folhas compostas de dois folíolos brilhantes de 6-14cm
                        de comprimento.
                      </li>
                      <li>- Dura ao corte.</li>
                      <li>- Fruto com farinha comestível muito nutritiva.</li>
                      <li>- Utilizada na construção civil.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="alert alert-secondary">
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
