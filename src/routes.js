import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Fauna from './screens/Fauna';
import Flora from './screens/Flora';
import Arqueologia from './screens/Arqueologia';
import Aguas from './screens/Aguas';
import Erro from './screens/Erro';
import Header from './components/Header';
import Footer from './components/Footer';
import Acoita from './screens/Flora/Matrizes/Acoita.jsx'
import Amendoin from './screens/Flora/Matrizes/Amendoin.jsx'

import React from 'react';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flora" element={<Flora />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/arqueologia" element={<Arqueologia />} />
        <Route path="/aguas" element={<Aguas />} />

        <Route path='/acoita' element={<Acoita />} />
        <Route path='/amendoin' element={<Amendoin />} />

        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
