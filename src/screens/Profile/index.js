import { useContext, useState } from 'react';
import './profile.css';
import { AuthContext } from '../../context/auth';
import Sidebar from '../../components/Sidebar';
import TitleRegis from '../../components/Texts/TitleRegis';
import { FcSettings } from 'react-icons/fc';
import { FiUpload } from 'react-icons/fi';
import avatar from '../../assets/images/logos/avatar.png';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Minha Conta">
          <FcSettings size={25} />
        </TitleRegis>

        <div className="containerRegis">
          <form className="form-profile">
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" /> <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  alt="Foto de perfil"
                  width={250}
                  height={250}
                />
              ) : (
                <img
                  src={avatarUrl}
                  alt="Foto de perfil"
                  width={250}
                  height={250}
                />
              )}
            </label>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" />
            <label>Email</label>
            <input type="text" placeholder="teste@teste.com" disabled={true} />
            <button type="Submit">Salvar</button>
          </form>
        </div>
        {/* <div className="containerRegis">
          <button className="logout-btn">Sair</button>
        </div> */}
      </div>
    </div>
  );
}
