import { useContext, useState } from 'react';
import './profile.css';
import { AuthContext } from '../../context/auth';
import Sidebar from '../../components/Sidebar';
import TitleRegis from '../../components/Texts/TitleRegis';
import { FcSettings } from 'react-icons/fc';
import { FiUpload } from 'react-icons/fi';
import avatar from '../../assets/images/logos/avatar.png';
import { db, storage } from '../../firebase/firebaseConnection';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; //referencia do storage, upload da imagem, pega url da imagem
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Profile() {
  const { user, setUser, storageUser } = useContext(AuthContext);
  // se tiver usuario ele vai mostrar a foto dele, se não tiver ele vai mostrar a foto padrão
  // essa é a url da foto que vai ser mostrada
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  // essa é a foto que vai ser enviada para o firebase arquivo
  const [imageAvatar, setImageAvatar] = useState(null);

  // se tiver usuario ele vai mostrar o nome/email dele, se não tiver ele vai mostrar vazio
  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image); //seta a imagem
        setAvatarUrl(URL.createObjectURL(image)); //cria url da imagem
      } else {
        alert('Envie uma imagem do tipo PNG ou JPEG');
        setImageAvatar(null);
        return;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid; //id do usuario
    const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`);
    const uploadTask = uploadBytes(uploadRef, imageAvatar) //upload da imagem
      .then(snapshot => {
        getDownloadURL(snapshot.ref).then(async downloadURL => {
          //pega a url da imagem
          let urlFoto = downloadURL; //url da imagem
          //pega a url da imagem
          const docRef = doc(db, 'users', user.uid);
          await updateDoc(docRef, {
            avatarUrl: urlFoto,
            nome: nome
          }).then(() => {
            //atualiza o usuario/banco
            let data = {
              ...user,
              nome: nome, //atualiza o nome
              avatarUrl: urlFoto //atualiza a url da imagem
            };

            setUser(data); //atualiza o usuario
            storageUser(data); //atualiza o usuario no localstorage
            toast.success('Atualizado com sucesso!'); //mensagem de sucesso
          });
        });
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // se nao enviar imagem, so atualiza o nome
    if (imageAvatar === null && nome !== '') {
      //atualiando o nome
      //referencia do documento
      const docRef = doc(db, 'users', user.uid);
      //atualizando o documento
      await updateDoc(docRef, {
        nome: nome
      }).then(() => {
        let data = {
          ...user,
          nome: nome
        };

        setUser(data); //atualiza o usuario
        storageUser(data); //atualiza o usuario no localstorage
        toast.success('Nome alterado com sucesso!'); //mensagem de sucesso
      });
    }
    // se enviar imagem, atualiza a imagem e o nome
    else if (nome !== '' && imageAvatar !== null) {
      handleUpload();
    }
  }

  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Minha Conta">
          <FcSettings size={25} />
        </TitleRegis>

        <div className="containerRegis">
          <form className="form-profile" onSubmit={handleSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />{' '}
              <br />
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
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <label>Email</label>
            <input type="text" value={email} disabled={true} />
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
