import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
// import ImgBanner from '../../assets/images/flora/banner/img1.png';
import ImgBanner from '../../assets/images/flora/banner/img12.jpeg';
import Title from '../../components/Texts/Title';
import SubTitle from '../../components/Texts/SubTitle';
import CardsFlora from './CardsFlora';
import ContainerRow from '../../components/Containes/ContainerRow';
import rustificacaoMap from '../../assets/images/flora/maps/rustificacaoMap.png';
import sementeiraMap from '../../assets/images/flora/maps/sementeiraMap.png';
import MapPlantio from '../../assets/images/flora/maps/mapa.png';
import identFolhas1 from '../../assets/images/flora/curiosidades/identArvores.png';
import ParallaxImage from '../../components/ParallaxImage';
import { Link } from 'react-router-dom';

export default function Flora() {
  return (
    <>
      <Header />
      <ParallaxImage img={ImgBanner}>Flora RMB</ParallaxImage>
      <div className="bg-green cards-flora">
        <Container>
          <Title title="Cadastro de Matrizes" />
          <SubTitle desc="Matrizes em Destaque" />
          <CardsFlora />
          <div className="align-self-center pt-4">
            <Link className="uiverse" to="/matrizesArboreas">
              Lista de Matrizes
            </Link>
          </div>
        </Container>
      </div>
      <Container>
        <Title title="Áreas de Plantio">
          {/* Conheça as áreas de XXX e Rustificação do Viveiro */}
        </Title>
        <ContainerRow
          title="Visando atender o "
          titleMuted=" Subprograma de Recomposição das Matas Ciliares "
          paragraf=" E recomposição do Corredor Ecológico, foram plantadas 8553 mudas de espécies arbóreas em 20 áreas pertencentes a APP – Área de Preservação Permanente do Ribeirão do Ferro. O mapa ao lado mostra a disposição desses locais pelo perímetro do RMB, as AP- Áreas de Plantio são encadeadas conforme as datas de implantação."
          img={MapPlantio}
          btnTitle="Ver Mapa"
          tip="410k"
          btnLink="https://drive.google.com/file/d/16pqheeBhLINoPvrqrj8I52qw_jHxwi_M/view?usp=sharing"
          target="_blank"
        />
      </Container>
      <Container>
        <Title title="Viveiro Piloto"></Title>,
        <ContainerRow
          title="Mapa das Sementeiras e "
          titleMuted="Canteiros de semeadura."
          paragraf="Nas sementeiras ou canteiros de semeadura, as sementes das espécies nativas beneficiadas e selecionadas são postas para germinar. De forma geral, as sementeiras são mais indicadas para sementes grandes de fácil manuseio e alto poder germinativo, enquanto os canteiros são indicados para semeadura de sementes pequenas de difícil distribuição individualizada."
          img={sementeiraMap}
          btnTitle="Ver Mapa"
          tip="540k"
          btnLink="https://drive.google.com/file/d/1irjn2_kQmv_MAjeXKx-ygtmoGleDLJ8T/view?usp=sharing"
          target="_blank"
        />
        <ContainerRow
          title="Mapa da Área de "
          titleMuted="Rustificação de Mudas."
          paragraf="Nos estágios iniciais da formação da muda a irrigação e luminosidade são controladas no viveiro, a fim de garantir as melhores condições para seu desenvolvimento. Depois de formada, as mudas são transferidas para área de rustificação, onde são expostas as condições climáticas que encontrarão nos locais de plantio definitivo. Este processo demora pelo menos trinta dias antes dela ir para o plantio definitivo."
          img={rustificacaoMap}
          btnTitle="Ver Mapa"
          tip="330k"
          btnLink="https://drive.google.com/file/d/1REa1xNZhPUifPW9sGeRqcESdwgIsX6wm/view?usp=sharing"
          target="_blank"
        />
      </Container>

      <div className="bg-green-light">
        <Container>
          <Title title="Bosque dos pioneiros">
            <p>Conheça o bosque dos pioneiros</p>
          </Title>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d885.6993329936776!2d-47.6179412!3d-23.3881028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5efc7ecda2e37%3A0x862df6ca25dd3926!2sRMB%20-%20Bosque%20dos%20Pioneiros!5e1!3m2!1spt-BR!2sbr!4v1681734358558!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </div>

      <div
        style={{
          background: ' rgba(46,183,230,1) '
        }}
      >
        <Container>
          <ContainerRow
            title="Como identificar Árvores pelo tipo de folha"
            // titleMuted="Itll blow your mind."
            paragraf="   A identificação de árvores baseada no tipo de folha pode ser uma tarefa desafiadora, uma vez que existem muitas variações de formas, tamanhos e texturas de folhas dentro de uma mesma espécie de árvore. No entanto, é possível identificar algumas árvores com base em características gerais das folhas. Os principais exemplos estão na figura ao lado.  Fonte: Árvore, Ser Tecnológico no Facebook"
            img={identFolhas1}
            btnTitle="Visite"
            tip="Árvore, Ser Tecnológico"
            btnLink="https://www.facebook.com/arvoresertecnologico/photos/a.501991869943424/2079354212207174/?type=3"
            target="_blank"
          ></ContainerRow>
        </Container>
      </div>
      <Footer />
    </>
  );
}
