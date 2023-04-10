import React, { Component } from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ImgBanner from '../../assets/images/flora/carousel/img1.png';
import Title from '../../components/Texts/Title';
import SubTitle from '../../components/Texts/SubTitle';
import TableMatrizes from '../../components/TableMatrizes';
import CardsFlora from './CardsFlora';
import ContainerRow from '../../components/Containes/ContainerRow';
import rustificacaoMap from '../../assets/images/flora/maps/rustificacaoMap.png';
import sementeiraMap from '../../assets/images/flora/maps/sementeiraMap.png';
import identFolhas1 from '../../assets/images/flora/curiosidades/identArvores.png';
import BosqueImg from '../../assets/images/flora/maps/pioneirosMap.png';
import ParallaxImage from '../../components/ParallaxImage';

export default function Flora() {
  return (
    <>
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
          <ContainerRow
            title="Conheça o Bosque dos Pioneiros"
            titleMuted="Itll blow your mind."
            paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
            img={BosqueImg}
            btnTitle="Visite"
            tip="Bosque dos Pioneiros"
            btnLink="https://www.google.com/maps/place/RMB+-+Bosque+dos+Pioneiros/@-23.3879129,-47.6179379,15z/data=!4m2!3m1!1s0x0:0x862df6ca25dd3926?sa=X&ved=2ahUKEwj5t9GoyJX-AhWJAbkGHYJnDqYQ_BJ6BAhtEAg"
            target="_blank"
          >
            <span className="fs-6">
              Fonte: Árvore, Ser Tecnológico no Facebook
            </span>
          </ContainerRow>
        </Container>
      </div>

      <div
        className="text-light"
        style={{
          background: ' rgba(46,183,230,1) '
        }}
      >
        {' '}
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
    </>
  );
}
