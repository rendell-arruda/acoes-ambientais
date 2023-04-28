import React from 'react';
import Container from '../../../components/Containes';
import './matrizes.css';
import AcoitaArvore from '../../../assets/images/flora/matrizes/acoita/acoitaArvore.jpg';
import AcoitaFlor from '../../../assets/images/flora/matrizes/acoita/acoitaflor.jpg';
import AcoitaMuda from '../../../assets/images/flora/matrizes/acoita/acoitaMuda.jpg';
import AcoitaSemente from '../../../assets/images/flora/matrizes/acoita/sementes.jpg';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SiGooglemaps } from "react-icons/si";
import { TbTrees } from "react-icons/tb";
import { FcGlobe, FcHighPriority, FcCalendar } from "react-icons/fc";
export default function Acoita() {
  return (
    <div>
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
                    src={AcoitaSemente}
                    className="d-block w-100 "
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
          <div className="px-2">
            <div className='conteudoTextual'>
              <h3 className="pt-4 font-1-xxl">Açoita <br />Cavalo</h3>
              <p className="especieText">Luehea divaricata Mart & Zucc.</p>
            </div>
            <div className="caractIniciais">
              <ul className="caractIniciais-list">
                <div className="list-item">

                  <FcGlobe size={25} />


                  <li className="caracteristica font-2-s">
                    <span className=''>Bioma:</span> Cerrado, Mata Atlântica e Pampa
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
                    <span>Coleta:</span> MAI - AGO
                  </li>
                </div>
                <div className="list-item">
                  <SiGooglemaps size={25} color={'#fff'} />
                  <a
                    href="https://www.google.com.br/maps/place/23%C2%B023'17.2%22S+47%C2%B037'09.5%22W/@-23.3880778,-47.6197675,166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x7aa73cbc8955f778!8m2!3d-23.3881!4d-47.6193"
                    target="_blank"
                  >
                    <li>
                      <b>Matriz:</b> M 2082
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
                          - As sementes podem ser plantadas diretamente em
                          sementeiras (canteiros) sem tratamento, ou podem ser
                          preparadas deixando-as 2h em água gelada antes do
                          plantio.
                        </li>
                        <li>
                          - Após germinação (4-8 semanas) devem ser repicadas
                          para recipientes individuais
                        </li>
                        <li>- Possui preferência por substrato argiloso</li>
                        <li>- Emergência entre 8-74 dias</li>
                        <li>
                          - Taxa de germinação variável e irregular entre 20% e
                          85%
                        </li>
                        <li>
                          - As mudas atingem porte adequado para plantio após 6
                          meses da semeadura.
                        </li>
                        <li>
                          - Não possui preferência de tipo de solo, se adaptando
                          bem a solos secos e úmidos, argilosos ou arenosos
                        </li>
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
                        <b>- Tempo mínimo em viveiro:</b> 4 meses
                      </li>
                      <li>
                        - Colher os frutos diretamente das árvores quando mudam
                        da coloração verde para marro-claro
                      </li>
                      <li>- Submetê-los a secagem à sombra</li>
                      <li>
                        - Depois de secos recomenda-se agitação dos frutos para
                        liberação total das sementes.
                      </li>
                      <li>
                        - A viabilidade da semente é variável, havendo relatos
                        de redução de viabilidade em 50% após 1 mês de coleta e
                        de 45,5% após 22 meses.
                      </li>
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
                      <li>- Médio a grande porte - Pode chegar a 30m.</li>
                      <li>
                        - Tronco tortuoso, nodoso, forma fuste curtos e retos.
                      </li>
                      <li>
                        - Apresenta folhas simples, alternadas, dísticas, com
                        estípulas serreadas, áspera na face e tomentosa no
                        dorso.
                      </li>
                      <li>
                        - Madeira moderadamente pesada, resistente e
                        extremamente flexível.
                      </li>
                      <li>
                        - Utilizada em confecção de móveis curvados, ripas e
                        molduras.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className='alert alert-secondary'>
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
    </div>
  );
}
