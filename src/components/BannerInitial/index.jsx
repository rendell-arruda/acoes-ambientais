import React from 'react';
import './style.css';
import Peroba from '../../assets/images/bannerPeroba.jpg';

export default function BannerInitial() {
  return (
    <>
      <div className="py-4 p-md-4 d-flex intro-conteudo justify-content-center text-center ">
        <div className="col-md-5">
          <h1 className="">Ações Ambientais RMB</h1>
          <p className="">
            Nesta página apresentamos as iniciativas desenvolvidas no Sítio-RMB
            segundo os Planos Ambientais.
          </p>
        </div>
        <div className="card card-intro">
          <img className="card-img-top" src={Peroba} alt="imagem da Peroba" />
          <div className="card-body">
            <p className="card-text">
              Esta é a Peroba Rosa símbolo do Sítio RMB e do Bosque dos
              Pioneiros.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}