import React from 'react';
import './ArqSection.css';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaArq from '../../../assets/images/arqueologia/capArq.jpg';
import ContainerRow from '../../Containes/ContainerRow';

export default function ArqueologiaSection(props) {
  return (
    <div className="bg-green-light">
      <Container>
        <Title title="Sítio Arqueológico Jibóia">
          <p>
            Confira as atividades desenvolvidas no sitio RMB com no sítio
            Arqueológico local.
          </p>
        </Title>

        <ContainerRow
          title="First featurette heading2."
          titleMuted="Itll blow your mind."
          paragraf="   Some great placeholder content for the first featurette here.
          Imagine some exciting prose here."
          img={CapaArq}
          btnTitle="Veja mais"
          tip="Arqueologia"
          btnLink="/arqueologia"
        />
      </Container>
    </div>
  );
}
