import React from 'react';
import './FaunaSection.css';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import SubTitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CardImgBack from '../../../components/Cards/CardImgBack';
import ImgFimFim from '../../../assets/images/fauna/fimfimMacho.jpg';
import ImgCuica from '../../../assets/images/fauna/cuica.jpg';
import ImgTamandua from '../../../assets/images/fauna/tamandua.jpg';
import ImgSaiAzul from '../../../assets/images/fauna/saiAzul.jpg';

export default function FaunaSection(props) {
  return (
    <div className="fauna-section-bg">
      <Container>
        <Title title="Fauna RMB">
          Confira as atividades desenvolvidas no sitio RMB com foco na Fauna
          local.
        </Title>
        <SubTitle desc="Animais recem avistados" />
        <div className="container-xl py-3 d-flex flex-wrap gap-3 align-items-center justify-content-around">
          <CardImgBack
            imgCard={ImgFimFim}
            name="Fim Fim"
            scientificName="Euphonia chlorotica."
            reference="Fonte: WikiAves"
          >
            Habitante do cerrado, a caatinga, cocais e matas serranas da região
            Sudeste, podendo ser visto em todo território brasileiro. Costuma
            procurar frutos na parte mais alta das árvores
          </CardImgBack>

          <CardImgBack
            imgCard={ImgCuica}
            name="Fim Fim"
            scientificName="Euphonia chlorotica."
            reference="Fonte: WikiAves"
          >
            Também conhecida como Cuíca Graciola, é um roedor de habitos
            noturnos, pesam de 12 a 50g, possuem uma dieta onívora e
            insectívora. Frequentemente são avistadas em formações de florestas
            primárias e secundárias.
          </CardImgBack>

          <CardImgBack
            imgCard={ImgTamandua}
            name="Tamanduá"
            scientificName="Myrmecophaga tridactyla."
            reference="Fonte: WikiAves"
          >
            Grande mamífero das Américas Central e do Sul. Ele esta listado com
            espécie em Vulnerabilidade pela União Internacional para a
            Conservação da Natureza. Alimenta-se exclusivamente de formigas e
            cupins.
          </CardImgBack>
          <CardImgBack
            imgCard={ImgSaiAzul}
            name="Saí Azul"
            scientificName="Dacnis cayana."
            reference="Fonte: WikiAves"
          >
            GAparece principalmente no norte e centro do Brasil. Alimenta-se de
            néctar, insetos e frutas. Vive aos pares ou em pequenos grupos
            procurando alimento. Costuma ter de duas a quatro ninhadas por
            temporada.
          </CardImgBack>
        </div>
        <BtnTooltip link="/fauna" tip="Fauna Page" title="Veja Mais" />
      </Container>
    </div>
  );
}
