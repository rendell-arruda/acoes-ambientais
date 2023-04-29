import React from 'react';
import Sidebar from '../../components/Sidebar';
import TitleRegis from '../../components/Texts/TitleRegis';
import { FcSettings } from 'react-icons/fc';

export default function Profile() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Minha Conta">
          <FcSettings size={25} />
        </TitleRegis>
      </div>
    </div>
  );
}
