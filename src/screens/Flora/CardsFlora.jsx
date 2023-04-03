import React from 'react';
import CardImgBack from '../../components/Cards/CardImgBack';
import ImgAcoita from '../../assets/images/flora/matrizes/acoita/acoitaArvore.jpg';
import ImgAmendoin from '../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoMudas.JPG';
import ImgJatoba from '../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';
import ImgCopaiba from '../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';

export default function CardsFlora() {
  return (
    <div className="container-xl py-4 d-flex flex-wrap gap-2 align-items-center justify-content-around">
      <CardImgBack
        imgCard={ImgAcoita}
        name="Açoita Cavalo"
        scientificName="Luehea divaricata Mart & Zucc."
        reference="Fonte: Wikipedia"
        link="/acoita"
        linkTitle="Ver mais"
      >
        Muito comum na Mata Atlântica, encontrada em capoeiras e pastagens. Em
        tupi-guarani, <b>Ivating</b>, que significa "Fruto que aborrece".
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
        tipica do Cerrado, sua florada amarela exuberante se destaca no dossel
        da floresta.
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
        Seu óleo, conhecido mundialmente como o bálsamo da floresta, é utilizado
        desde a indústria de combustíveis à fabricação de comésticos.
      </CardImgBack>
    </div>
  );
}
