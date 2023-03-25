import React from 'react';
import './ArqSection.css';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaArq from '../../../assets/images/arqueologia/capArq.jpg';

export default function ArqueologiaSection(props) {
  return (
    <Container>
      <Title title="Sítio Arqueológico Jibóia">
        <p>
          Confira as atividades desenvolvidas no sitio RMB com no sítio
          Arqueológico local.
        </p>
      </Title>

      <div className="d-flex align-items-center containerArq ">
        <div className="conteudoArq d-flex flex-column">
          <h2 className="featurette-heading fw-normal lh-1">
            First featurette heading.
            <span className="text-muted">Itll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
          <BtnTooltip title="Veja mais" tip="Arqueologia" link="/arqueologia" />
        </div>
        <div>
          <img src={CapaArq} className="img-fluid mx-auto" />
        </div>
      </div>
    </Container>
  );
}
