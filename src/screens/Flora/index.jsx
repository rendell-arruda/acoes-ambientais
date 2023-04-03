import React, { Component } from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ImgBanner1 from '../../assets/images/flora/carousel/banner1920x480TestSquosh.jpg';
import ImgBanner2 from '../../assets/images/flora/carousel/banner1920x480.jpg';
import ImgBanner3 from '../../assets/images/flora/carousel/img1.png';
import Title from '../../components/Texts/Title';
import SubTitle from '../../components/Texts/SubTitle';
import TableMatrizes from '../../components/TableMatrizes';
import CardsFlora from './CardsFlora';
import ContainerRow from '../../components/Containes/ContainerRow';
import rustificacaoMap from '../../assets/images/flora/maps/rustificacaoMap.png';
import sementeiraMap from '../../assets/images/flora/maps/sementeiraMap.png';
import identFolhas1 from '../../assets/images/flora/curiosidades/identArvores.png';

export default function Flora() {
  return (
    <>
      <CarouselHeader
        img1={ImgBanner1}
        img2={ImgBanner2}
        img3={ImgBanner3}
        title="Flora RMB"
        subtitle="  Descriçao breve do que seria essa pagina da flora com algumas
                  atividades."
        desc1="  Descriçao breve do que seria essa pagina da flora com algumas
        atividades."
        desc2=" Some representative placeholder content for the third slide of
        this carousel."
      />
      <div className="bg-green cards-flora">
        <SubTitle desc="Matrizes recem cadastradas" />
        <CardsFlora />
      </div>
      <div className="tableMatrizes">
        <SubTitle desc="Matrizes cadastradas" />
        <div className="container-md">
          <TableMatrizes
            col1="Nome"
            col2="Classe"
            col3="Coleta de Semente"
            col4="Link"
          />
        </div>
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
      <div
        className=" text-light text-center "
        style={{
          background:
            ' linear-gradient(180deg, rgba(46,183,230,1) 70%, rgba(40,203,141,1) 90%); '
        }}
      >
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
      </div>
    </>
  );
}
