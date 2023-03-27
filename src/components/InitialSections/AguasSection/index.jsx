import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaAguas from '../../../assets/images/aguas/capaAguas.jpg.jpg';

export default function AguasSection(props) {
  return (
    <Container>
      <Title title="Águas Subterrâneas e Superficiais">
        <p>
          Confira as atividades desenvolvidas no sitio RMB com no sítio
          Arqueológico local.
        </p>
      </Title>

      <div className="d-flex align-items-center containerRow ">
        <div className="d-flex flex-column conteudoRow">
          <h2 className="featurette-heading fw-normal lh-1">
            First featurette heading.
            <span className="text-muted">Itll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
          <BtnTooltip title="Veja mais" tip="Águas Page" link="/aguas" />
        </div>

        <img src={CapaAguas} className="img-fluid mx-auto" />
      </div>
    </Container>
  );
}
