import React from 'react';
import { Link } from 'react-router-dom';
import LogoAmazul from '../../assets/images/logos/logoAmazul.png';
import Logo5s from '../../assets/images/logos/logo5s.png';
import Title from '../Texts/Title';

export default function Footer(props) {
  return (
    <div
      className="footer-bg footer"
      style={{
        backgroundColor: 'var(--greenBg)',
        color: 'var(--grayTextlight)'
      }}
    >
      <div className="container">
        <Title title="Links Importantes" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 ">
          <div className="col mb-3 ">
            <h5>Mapa do Site</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/flora" className="nav-link p-0">
                  Flora
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/fauna" className="nav-link p-0">
                  Fauna
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/arqueologia" className="nav-link p-0">
                  Arqueologia
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/aguas" className="nav-link p-0">
                  Águas
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Parceiros</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.gov.br/cnen/pt-br"
                  target="_blank"
                  className="nav-link p-0"
                >
                  CNEN
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.marinha.mil.br/ctmsp/"
                  target="_blank"
                  className="nav-link p-0"
                >
                  CTMSP
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="https://ipero.sp.gov.br/"
                  className="nav-link p-0"
                >
                  Prefeitura de Iperó
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.icmbio.gov.br/flonaipanema/"
                  target="_blank"
                  className="nav-link p-0"
                >
                  ICMBio
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3"></div>
          <div className="col mb-3 d-flex flex-column align-items-center justify-content-between text-center">
            <div className="d-flex">
              <a
                href="https://www.amazul.mar.mil.br/rmb_atuacao_projetos"
                target="_blank"
                className="d-flex align-items-center justify-content-center link-dark text-decoration-none"
              >
                <img src={LogoAmazul} alt="Logo Amazul" width="60" />
              </a>
              <a
                href={LogoAmazul}
                target="_blank"
                className="d-flex align-items-center justify-content-center link-dark text-decoration-none"
              >
                <img src={Logo5s} alt="Logo GI" width="60" />
              </a>
            </div>

            <p className="py-3">
              Este repositório é uma iniciativa da Gerência de Implantação da
              <b> AMAZUL </b>no RMB.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <p className="footer-p text-muted">
          Copyright © 2022 RLC Arruda - Gerência de Implantação Amazul - Todos
          os direitos reservados
        </p>
      </div>
    </div>
  );
}
