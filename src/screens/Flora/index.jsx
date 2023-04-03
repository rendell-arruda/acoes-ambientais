import React, { Component } from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ImgBanner1 from '../../assets/images/flora/carousel/banner1920x480TestSquosh.jpg';
import ImgBanner2 from '../../assets/images/flora/carousel/banner1920x480.jpg';
import ImgBanner3 from '../../assets/images/flora/carousel/img1.png';
import SubTitle from '../../components/Texts/SubTitle';
import TableMatrizes from '../../components/TableMatrizes';
import CardsFlora from './CardsFlora';

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
    </>
  );
}
