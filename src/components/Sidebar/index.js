import { useContext } from 'react';
import avatarImg from '../../assets/images/logos/avatar.png';
import './sidebar.css';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';
import { FcInspection, FcSettings, FcPlus } from 'react-icons/fc';

import { GoSignOut } from 'react-icons/go';
import { TbTrees } from 'react-icons/tb';

export default function Sidebar() {
  //todo objeto USER que está dentro do AuthContext quando logado
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div>
        <img
          src={user.avatarUrl === null ? avatarImg : user.avatarUrl}
          alt="Foto do Usuário"
        />
      </div>
      <Link to="/matrizesArboreas">
        <FcInspection size={25} /> Matrizes Arbóreas
      </Link>
      <Link to="/registerTree">
        <FcPlus size={25} /> Cadastro
      </Link>

      <Link to="/flora">
        <TbTrees size={25} color={'var(--greenDetail)'} /> Flora
      </Link>
      <Link to="/profile">
        <FcSettings size={25} /> Perfil
      </Link>
      <Link onClick={logout}>
        <GoSignOut size={25} color="#f00" />
        Sair
      </Link>
    </div>
  );
}
