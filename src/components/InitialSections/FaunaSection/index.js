import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import SubTitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CardImgBack from '../../Cards/CardImgBack';
import ImgFimFim from '../../../assets/images/fauna/fimfimMacho.png';
import ImgCuica from '../../../assets/images/fauna/cuica.jpg';
import ImgTamandua from '../../../assets/images/fauna/tamandua.jpg';
import ImgSaiAzul from '../../../assets/images/fauna/saiAzul.jpg';

export default function FaunaSection(props) {
  return (
    <div className="bg-green">
      <Container>
        <Title title="Fauna RMB">
          Atividades desenvolvidas no âmbito dos programas de Monitoramento e
          Conservação de Fauna.
        </Title>
        <SubTitle desc="População de animais do sítio" />
        <div className="container-xl py-2 d-flex flex-wrap gap-1 align-items-center justify-content-around">
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
            name="Cuíca"
            scientificName="Philander opossum"
            reference="Fonte: WikiPedia"
          >
            Roedor de habitos noturnos, possuem uma dieta onívora e insectívora.
            Frequentemente são avistadas em formações de florestas primárias e
            secundárias.
          </CardImgBack>

          <CardImgBack
            imgCard={ImgTamandua}
            name="Tamanduá"
            scientificName="Myrmecophaga tridactyla."
            reference="Fonte: Wikipedia"
          >
            Grande mamífero das Américas Central e do Sul. Esta listado com
            espécie em Vulnerabilidade pela União Internacional para a
            Conservação da Natureza. Alimenta-se de formigas e cupins.
          </CardImgBack>
          <CardImgBack
            imgCard={ImgSaiAzul}
            name="Saí Azul"
            scientificName="Dacnis cayana."
            reference="Fonte: WikiAves"
          >
            Aparece principalmente no norte e centro do Brasil. Alimenta-se de
            néctar, insetos e frutas. Vive aos pares ou em pequenos grupos
            procurando alimento. .
          </CardImgBack>
        </div>
        <div className=" align-self-center">
          <BtnTooltip link="/fauna" tip="Fauna Page" title="Veja Mais" />
        </div>
      </Container>
    </div>
  );
}