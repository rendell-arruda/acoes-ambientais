import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import BannerInitial from '../../components/BannerInitial';
import Title from '../../components/Texts/Title';
import FaunaSection from '../../components/InitialSections/FaunaSection';
import FloraSection from '../../components/InitialSections/FloraSection';
import ArqueologiaSection from '../../components/InitialSections/ArqueologiaSection';
import AguasSection from '../../components/InitialSections/AguasSection';
import InformSection from '../../components/InitialSections/InformSection';

export default function Home(props) {
  return (
    <>
      <Header />
      <BannerInitial />
      <div>
        <FloraSection />
        <FaunaSection />
        <ArqueologiaSection />
        <AguasSection />
        <InformSection />
      </div>
      <Footer />
    </>
  );
}
