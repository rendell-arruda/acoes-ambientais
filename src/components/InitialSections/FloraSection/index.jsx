import React from 'react';
import Title from '../../Texts/Title';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import CapaAcoita from '../../../assets/images/flora/matrizes/acoita/acoitaCapa.jpg';
import CapaAmendoin from '../../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoSemente.jpg';
import CapaJatoba from '../../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';
import CapaCopaiba from '../../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';

export default function FloraSection(props) {
  return (
    <div className="container-xxl pb-4">
      <Title title="Flora RMB">
        <p>
          Confira as atividades desenvolvidas no sitio RMB com foco na Flora
          local.
        </p>
      </Title>

      <FeatureList title="Titulo e tal" desc="issoo ali aqui gegere here" />
      <Subtitle desc="Matrizes Recem cadastradas" />
      {/* <div className="row g-4 row-cols-1 row-cols-1 row-cols-1 row-cols-lg-4 py-4 d-flex justify-content-center align-center"> */}
      <div className="gap-4 py-4 d-flex justify-content-center flex-wrap">
        <CardImgDesc
          title="Açoita Cavalo"
          desc="Matriz : M5050"
          img={CapaAcoita}
          page="/acoita"
        />
        <CardImgDesc
          title="Amendoin Bravo"
          img={CapaAmendoin}
          desc="Matriz : M5050"
          page="/amendoin"
        />
        <CardImgDesc
          title="Jatobá"
          desc="Matriz : M5050"
          img={CapaJatoba}
          page="/acoita"
        />
        <CardImgDesc
          title="Copaíba"
          desc="Matriz : M5050"
          img={CapaCopaiba}
          page="/acoita"
        />
      </div>
    </div>
  );
}
