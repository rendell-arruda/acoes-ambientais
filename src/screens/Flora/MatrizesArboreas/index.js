import React from 'react';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcInspection } from 'react-icons/fc';
export default function MatrizesArboreas() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Matrizes Arbóreas Cadastradas">
          <FcInspection size={25} />
        </TitleRegis>
      </div>
    </div>
  );
}
