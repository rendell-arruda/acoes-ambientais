import React from 'react';
import { Link } from 'react-router-dom';
import BannerInitial from '../../components/BannerInitial';
import Title from '../../components/Texts/Title';
import FaunaSection from '../../components/InitialSections/FaunaSection';
import FloraSection from '../../components/InitialSections/FloraSection';
import ArqueologiaSection from '../../components/InitialSections/ArqueologiaSection';

export default function Home(props) {
  return (
    <>
      <BannerInitial />
      <div>
        <FloraSection />

        <FaunaSection />
        <ArqueologiaSection />

        <Title title="Águas RMB">Mapas dos poços e nao sei que la</Title>
      </div>
    </>
  );
}
