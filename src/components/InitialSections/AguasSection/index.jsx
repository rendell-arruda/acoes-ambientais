import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaAguas from '../../../assets/images/aguas/capaAguas.jpg.jpg';
import ContainerRow from '../../Containes/ContainerRow';

export default function AguasSection(props) {
  return (
    <div className="bg-gray">
      <Container>
        <Title title="Águas Subterrâneas e Superficiais">
          {/* <p>
            Confira as atividades de XXXX das águas superficiais e subterrâneas.
          </p> */}
        </Title>

        <ContainerRow
          title="First featurette heading2."
          titleMuted="Itll blow your mind."
          paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
          img={CapaAguas}
          btnTitle="Veja mais"
          tip="Águas"
          btnLink="/aguas"
        />
      </Container>
    </div>
  );
}
