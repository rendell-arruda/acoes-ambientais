import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Private from './Private';

import Home from '../screens/Home';
import Fauna from '../screens/Fauna';
import Flora from '../screens/Flora';
import Arqueologia from '../screens/Arqueologia';
import Aguas from '../screens/Aguas';
import Erro from '../screens/Erro';

import Acoita from '../screens/Flora/Matrizes/Acoita.js';
import Amendoim from '../screens/Flora/Matrizes/Amendoim.js';
import Jatoba from '../screens/Flora/Matrizes/Jatoba.js';
import Copaiba from '../screens/Flora/Matrizes/Copaiba.js';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MatrizesArboreas from '../screens/Flora/MatrizesArboreas';
import RegisterTree from '../screens/Flora/RegisterTree';
import Profile from '../screens/Profile';

export default function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/register"
          element={
            <Private>
              <SignUp />
              //
            </Private>
          }
        />
        <Route
          path="/home"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/profile"
          element={
            <Private>
              <Profile />
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
          path="/matrizesArboreas"
          element={
            <Private>
              <MatrizesArboreas />
            </Private>
          }
        />
        <Route
          path="/registerTree"
          element={
            <Private>
              <RegisterTree />
            </Private>
          }
        />
        <Route
          path="/registerTree/:id"
          element={
            <Private>
              <RegisterTree />
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
          path="/amendoim"
          element={
            <Private>
              <Amendoim />
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
