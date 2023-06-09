import React from 'react';
import Container from '../../../components/Containes';
import './matrizes.css';
import AmendoinSemente from '../../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoSemente.jpg';
import AmendoinMuda from '../../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoMudas.JPG';

import { FcGlobe, FcHighPriority, FcCalendar } from 'react-icons/fc';
import { SiGooglemaps } from 'react-icons/si';
import { TbTrees } from 'react-icons/tb';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Amendoim() {
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
                    src={AmendoinSemente}
                    className="d-block w-100"
                    alt="Sementes de Amendoim Bravo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Sementes de Amendoim Bravo podem ter cerca de 3 cm.</h5>
                  </div>
                </div>
                {/* <div className="carousel-item flor">
                  <img
                    src={AcoitaFlor}
                    className="d-block w-100"
                    alt="Flor de Amendoim Bravo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                     <h5>Flores de Amendoim Bravo podem ter cerca de 3 cm.</h5>
                  </div>
                </div> */}
                <div className="carousel-item muda">
                  <img
                    src={AmendoinMuda}
                    className="d-block w-100"
                    alt="Muda de Amendoin Bravo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Mudas de Amendoim Bravo emergem entre 15 -25 dias .</h5>
                  </div>
                </div>
                {/* <div className="carousel-item arvore">
                  <img
                    src={AcoitaArvore}
                    className="d-block w-100"
                    alt="Árvore de Açoita Cavalo"
                  />
                  <div className="carousel-caption d-none d-md-block bg-caption">
                    <h5>Arvores de Amendoim Bravo emergem entre 15 -25 dias .</h5>
                  </div>
                </div> */}
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
              <h3 className="pt-4 font-1-xxl ">
                Amendoim <br />
                Bravo
              </h3>
              <p className="especieText">Platypodium elegans Vog.</p>
            </div>
            <div className="caractIniciais">
              <ul className="caractIniciais-list">
                <div className="list-item">
                  <FcGlobe size={25} />
                  <li className="caracteristica">
                    <span>Bioma:</span> Cerrado e Pantanal
                  </li>
                </div>
                <div className="list-item">
                  <TbTrees size={26} color={'var(--greenDetail)'} />

                  <li className="caracteristica">
                    <span>Classe:</span> Secundária
                  </li>
                </div>
                <div className="list-item">
                  <FcHighPriority size={25} />
                  <li className="caracteristica">
                    <span>Conservação:</span> Pouco preocupante
                  </li>
                </div>
                <div className="list-item">
                  <FcCalendar size={25} />
                  <li className="caracteristica">
                    <span>Coleta:</span> SET - NOV
                  </li>
                </div>
                <div className="list-item">
                  <SiGooglemaps size={25} color={'#fff'} />
                  <a
                    href="https://www.google.com.br/maps/place/23%C2%B023'17.5%22S+47%C2%B037'43.3%22W/@-23.3881951,-47.6312749,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-23.3882!4d-47.6287"
                    target="_blank"
                  >
                    <li>
                      <b>Matriz:</b> - M 909
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
                          <b>- Síndrome de Dispersão de Semente:</b> Anemocórica
                        </li>
                        <li>
                          - Colher os frutos diretamente das árvores quando
                          iniciarem queda espontânea ou recolhe-los do chão após
                          a queda.
                        </li>
                        <li>- Podem ser diretamente semeados.</li>
                        <li>- Período reprodutivos – Setembro a Novembro.</li>
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
                        <b>- Tempo mínimo em viveiro:</b> 6 meses
                      </li>
                      <li>
                        <b>- Taxa de germinação Superior a</b> 50%
                      </li>
                      <li>
                        - Colocar as sementes para germinação sem nenhum
                        tratamento logo que colhidas.
                      </li>
                      <li>- Semear em canteiros a pleno sol. .</li>
                      <li>
                        - Possui preferência por substrato organo-argiloso.
                      </li>
                      <li>
                        - A viabilidade da semente é variável, havendo relatos
                        de redução de viabilidade em 50% após 1 mês de coleta e
                        de 45,5% após 22 meses.
                      </li>
                      <li>- As mudas se desenvolvem lentamente. .</li>
                      <li>- Período reprodutivos: Maio-agosto.</li>
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
                      <li>
                        - Pode chegar a ter de <b>8 a 12m.</b>
                      </li>
                      <li>
                        - Tronco curto e cilíndrico de 40 a 50cm de diâmetro.
                      </li>
                      <li>
                        - Folhas compostas pinadas, 10-20 folíolos de 2 a 4cm de
                        comprimento.
                      </li>
                      <li>
                        - Madeira moderadamente pesada, dura e tecido frouxo.
                      </li>
                      <li>
                        - Utilizada em carpintaria e marcenaria, obras internas,
                        cabos de ferramentas.
                      </li>
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
