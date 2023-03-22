import React from 'react';
import { Link } from 'react-router-dom';
import BannerInitial from '../../components/BannerInitial';
import FeatureList from '../../components/FeatureList';
import Title from '../../components/Texts/Title';

export default function Home(props) {
  return (
    <>
      <BannerInitial />
      <div className="container-xl">
        <Title title="Flora RMB">
          <p>
            Confira as atividades desenvolvidas no sitio RMB com foco na Flora
            local.
          </p>
        </Title>

        <FeatureList title="Titulo e tal" desc="issoo ali aqui gegere here" />
        <Title title="Fauna RMB">
          Confira as atividades desenvolvidas no sitio RMB com foco na Fauna
          local.
        </Title>
        <Title title="Arqueologia RMB">
          Conheça o Sítio arqueológico Jibóia
        </Title>
        <Title title="Águas RMB">Mapas dos poços e nao sei que la</Title>
      </div>
    </>
  );
}
