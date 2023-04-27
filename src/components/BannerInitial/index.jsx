import React from 'react';
import './style.css';
import Peroba from '../../assets/images/banners/bannerPeroba.jpg';
import Perobawide from '../../assets/images/banners/banner-perobaGrande.png';

import logoamazul from '../../assets/images/banners/amazul248.png';
import logocnen from '../../assets/images/banners/cnen248.png';
import logormb from '../../assets/images/banners/rmb248.png';

import Container from '../Containes';
import ParallaxImage from '../../components/ParallaxImage';
export default function BannerInitial() {
  return (
    <>
      <div className="py-4 p-md-4 d-flex intro-conteudo justify-content-center align-items-start ">
        <div className="intro-textImg d-flex flex-column align-items-center justify-content-center ">
          <h1 className="font-1-xxl">Ações Ambientais RMB</h1>
          <div className="container-logos d-flex gap-4">
            <img className="logo-cnen" src={logocnen} alt="logo cnen" />
            <img className="logo-amazul" src={logoamazul} alt="logo amazul" />
            <img className="logo-rmb" src={logormb} alt="logo rbm" />
          </div>
          {/* <p className="fs-6">
            Nesta página apresentamos as iniciativas desenvolvidas no Sítio-RMB
            segundo os Planos Ambientais.
          </p> */}
        </div>

        <div className="card card-intro">
          <img className="card-img-top" src={Peroba} alt="imagem da Peroba" />
          <div className="card-body">
            <p className="card-text text-center">
              Esta é a Peroba Rosa símbolo do Sítio RMB e do Bosque dos
              Pioneiros.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
