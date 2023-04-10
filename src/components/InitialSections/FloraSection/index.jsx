import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaAcoita from '../../../assets/images/flora/matrizes/acoita/acoitaCapa.jpg';
import CapaAmendoin from '../../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoSemente.jpg';
import CapaJatoba from '../../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';
import CapaCopaiba from '../../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';

export default function FloraSection(props) {
  return (
    <Container>
      <Title title="Flora RMB">
        <p>
          Confira as atividades desenvolvidas no sitio RMB com foco na Flora
          local.
        </p>
      </Title>

      <FeatureList title="Titulo e tal" desc="issoo ali aqui gegere here" />
      <Subtitle desc="Matrizes Recem cadastradas" />
      <div className="gap-4 py-4 d-flex justify-content-center flex-wrap align-items-center">
        <CardImgDesc
          title="Açoita Cavalo"
          desc="Matriz : M5050"
          img={CapaAcoita}
          link="/acoita"
        />
        <CardImgDesc
          title="Amendoin Bravo"
          img={CapaAmendoin}
          desc="Matriz : M5050"
          link="/amendoin"
        />
        <CardImgDesc
          title="Jatobá"
          desc="Matriz : M5050"
          img={CapaJatoba}
          link="/jatoba"
        />
        <CardImgDesc
          title="Copaíba"
          desc="Matriz : M5050"
          img={CapaCopaiba}
          link="/copaiba"
        />
        <BtnTooltip
          title="Veja mais"
          tip="Flora Page"
          className="align-content-end"
          link="/flora"
        />
      </div>
    </Container>
  );
}
