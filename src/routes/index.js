import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Private from './Private';

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
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/flora"
          element={
            <Private>
              <Flora />
            </Private>
          }
        />
        <Route
          path="/fauna"
          element={
            <Private>
              <Fauna />
            </Private>
          }
        />
        <Route
          path="/arqueologia"
          element={
            <Private>
              <Arqueologia />
            </Private>
          }
        />
        <Route
          path="/aguas"
          element={
            <Private>
              <Aguas />
            </Private>
          }
        />
        <Route
          path="/acoita"
          element={
            <Private>
              <Acoita />
            </Private>
          }
        />
        <Route
          path="/amendoin"
          element={
            <Private>
              <Amendoin />
            </Private>
          }
        />
        <Route
          path="/jatoba"
          element={
            <Private>
              <Jatoba />
            </Private>
          }
        />
        <Route
          path="/copaiba"
          element={
            <Private>
              <Copaiba />
            </Private>
          }
        />

        <Route
          path="*"
          element={
            <Private>
              <Erro />
            </Private>
          }
        />
      </Routes>
    </>
  );
}
