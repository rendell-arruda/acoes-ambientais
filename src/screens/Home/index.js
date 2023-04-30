import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import BannerInitial from '../../components/BannerInitial';

import FaunaSection from '../../components/InitialSections/FaunaSection';
import FloraSection from '../../components/InitialSections/FloraSection';
import ArqueologiaSection from '../../components/InitialSections/ArqueologiaSection';
import AguasSection from '../../components/InitialSections/AguasSection';
import InformSection from '../../components/InitialSections/InformSection';

export default function Home(props) {
  return (
    <div>
      <Header />
      <BannerInitial />

      <FloraSection />
      <FaunaSection />
      <ArqueologiaSection />
      <AguasSection />
      <InformSection />
      <Footer />
    </div>
  );
}
