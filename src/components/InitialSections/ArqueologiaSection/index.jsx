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
    <div className="bg-green-ligth">
      <Container>
        <Title title="Sítio Arqueológico Jibóia">
          <p>
            Confira as atividades desenvolvidas no sitio RMB com no sítio
            Arqueológico local.
          </p>
        </Title>

        {/* <div className="d-flex align-items-center containerRow ">
          <div className="conteudoRow d-flex flex-column text-center">
            <h2 className="featurette-heading fw-normal lh-1">
              First featurette heading.
              <br /> <span className="text-muted">Itll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
            <BtnTooltip
              title="Veja mais"
              tip="Arqueologia"
              link="/arqueologia"
            />
          </div>

          <img src={CapaArq} className="img-fluid mx-auto" />
        </div> */}
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
