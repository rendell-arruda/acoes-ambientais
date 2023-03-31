import React, { Component } from 'react';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ImgBanner1 from '../../assets/images/flora/carousel/banner1920x480TestSquosh.jpg';
import ImgBanner2 from '../../assets/images/flora/carousel/banner1920x480.jpg';
import ImgBanner3 from '../../assets/images/flora/carousel/img1.png';
import SubTitle from '../../components/Texts/SubTitle';
import Title from '../../components/Texts/Title';
import cadastroMatrizes from './Matrizes/cadastroMatrizes.js';
import CardImgBack from '../../components/Cards/CardImgBack';
import ImgAcoita from '../../assets/images/flora/matrizes/acoita/acoitaArvore.jpg';
import ImgAmendoin from '../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoMudas.JPG';
import ImgJatoba from '../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';
import ImgCopaiba from '../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';
import Table from '../../components/Table';

export default function Flora() {
  return (
    <div>
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
      <div className="bg-green">
        <SubTitle desc="Matrizes recem cadastradas" />
        <div className="container-xl py-3 d-flex flex-wrap gap-3 align-items-center justify-content-around">
          <CardImgBack
            imgCard={ImgAcoita}
            name="Açoita Cavalo"
            scientificName="Luehea divaricata Mart & Zucc."
            reference="Fonte: Wikipedia"
            link="/acoita"
            linkTitle="Ver mais"
          >
            Muito comum na Mata Atlântica, encontrada em capoeiras e pastagens.
            Em tupi-guarani, <b>Ivating</b>, que significa "Fruto que aborrece".
          </CardImgBack>

          <CardImgBack
            imgCard={ImgAmendoin}
            name="Amendoin Bravo"
            scientificName="Platypodium elegans Vog."
            reference="Fonte: Agrolink"
            link="/amendoin"
            linkTitle="Ver mais"
          >
            Originaria do Brasil, também conhecida como leiteira, essa espécie é
            tipica do Cerrado, sua florada amarela exuberante se destaca no
            dossel da floresta.
          </CardImgBack>

          <CardImgBack
            imgCard={ImgJatoba}
            name="Jatobá"
            scientificName="Hymenaea courbaril."
            reference="Fonte: Web Ambiental"
            link="/jatoba"
            linkTitle="Ver mais"
          >
            Presente em todo território brasileiro. Além de suas propriedades
            medicinais, sua polpa é uma rica fonte de
            <b>Vitaminas C e minerais</b>.
          </CardImgBack>
          <CardImgBack
            imgCard={ImgCopaiba}
            name="Copaíba"
            scientificName="Copaifera IBngsdorlfii Oesf."
            reference="Fonte: WebAmbiental"
            link="/copaiba"
            linkTitle="Ver mais"
          >
            Seu óleo, conhecido mundialmente como o bálsamo da floresta, é
            utilizado desde a indústria de combustíveis à fabricação de
            comésticos.
          </CardImgBack>
        </div>
      </div>
      <div className="tableMatrizes">
        <SubTitle desc="Matrizes cadastradas" />
        <Container>
          <Table
            col1="Nome"
            col2="Classe"
            col3="Coleta de Semente"
            col4="Link"
          />
        </Container>
      </div>
    </div>
  );
}

export class TrMatrizes extends Component {
  render() {
    return (
      <>
        {cadastroMatrizes.map(item => {
          return (
            <tbody key={item.id}>
              <tr>
                <th scope="row">{item.nome}</th>
                <td>{item.classe}</td>
                <td>{item.coleta}</td>
                <td>
                  <a href={item.link}>Link</a>
                </td>
              </tr>
            </tbody>
          );
        })}
      </>
    );
  }
}
