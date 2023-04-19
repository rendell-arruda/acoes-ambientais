import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
// import ImgBanner from '../../assets/images/flora/banner/img1.png';
import ImgBanner from '../../assets/images/flora/banner/img12.jpeg';
import Title from '../../components/Texts/Title';
import SubTitle from '../../components/Texts/SubTitle';
import TableMatrizes from '../../components/TableMatrizes';
import CardsFlora from './CardsFlora';
import ContainerRow from '../../components/Containes/ContainerRow';
import rustificacaoMap from '../../assets/images/flora/maps/rustificacaoMap.png';
import sementeiraMap from '../../assets/images/flora/maps/sementeiraMap.png';
import identFolhas1 from '../../assets/images/flora/curiosidades/identArvores.png';
import ParallaxImage from '../../components/ParallaxImage';

export default function Flora() {
  return (
    <>
      <Header />
      <ParallaxImage img={ImgBanner}>Flora RMB</ParallaxImage>
      <div className="bg-green cards-flora">
        <Container>
          <Title title="Cadastro de Matrizes" />
          <SubTitle desc="Matrizes recem cadastradas" />
          <CardsFlora />

          <div className="tableMatrizes">
            <SubTitle desc=" Tabela de Matrizes Cadastradas" />
            <div className="container-md">
              <TableMatrizes
                col1="Nome"
                col2="Classe"
                col3="Coleta de Semente"
                col4="Link"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Title title="Viveiro RMB">
          Conheça as áreas de XXX e Rustificação do Viveiro{' '}
        </Title>
        <ContainerRow
          title="Área de rustificação de mudas."
          // titleMuted="Itll blow your mind."
          paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
          img={rustificacaoMap}
          btnTitle="Download"
          tip="330k"
          btnLink="https://drive.google.com/file/d/1EOQozKbjeocNsIi3K3YNf4Z0fnuzQhts/view"
        />
        <ContainerRow
          title="Sementeira de espécies"
          titleMuted="Itll blow your mind."
          paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
          img={sementeiraMap}
          btnTitle="Download"
          tip="540k"
          btnLink="https://drive.google.com/file/d/1irjRqrJmyrBm6qNMXhOOkfTBrJt-ohsZ/view"
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
        className="text-light"
        style={{
          background: ' rgba(46,183,230,1) '
        }}
      >
        <Container>
          <ContainerRow
            title="Como identificar Árvores pelo tipo de folha"
            titleMuted="Itll blow your mind."
            paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
            img={identFolhas1}
            btnTitle="Visite"
            tip="Árvore, Ser Tecnológico"
            btnLink="https://www.facebook.com/arvoresertecnologico/photos/a.501991869943424/2079354212207174/?type=3"
            target="_blank"
          >
            <span className="fs-6">
              Fonte: Árvore, Ser Tecnológico no Facebook
            </span>
          </ContainerRow>
        </Container>
      </div>
      <Footer />
    </>
  );
}
