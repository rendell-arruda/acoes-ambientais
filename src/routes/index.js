import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Fauna from '../screens/Fauna';
import Flora from '../screens/Flora';
import Arqueologia from '../screens/Arqueologia';
import Aguas from '../screens/Aguas';
import Erro from '../screens/Erro';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Acoita from '../screens/Flora/Matrizes/Acoita.jsx';
import Amendoin from '../screens/Flora/Matrizes/Amendoin.jsx';
import Jatoba from '../screens/Flora/Matrizes/Jatoba.jsx';
import Copaiba from '../screens/Flora/Matrizes/Copaiba.jsx';

import React from 'react';
import SignIn from '../screens/SignIn';

export default function RoutesApp() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flora" element={<Flora />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/arqueologia" element={<Arqueologia />} />
        <Route path="/aguas" element={<Aguas />} />
        <Route path="/acoita" element={<Acoita />} />
        <Route path="/amendoin" element={<Amendoin />} />
        <Route path="/jatoba" element={<Jatoba />} />
        <Route path="/copaiba" element={<Copaiba />} />

        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </>
  );
}