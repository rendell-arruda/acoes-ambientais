import React from 'react';
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

      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="col-md-6">
          <h2 className="featurette-heading fw-normal lh-1">
            First featurette heading.
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>

          <BtnTooltip
            title="Veja mais"
            tip="Arqueologia"
            className="align-content-end"
            link="/arqueologia"
          />
        </div>

        <img src={CapaArq} />
      </div>
    </Container>
  );
}
