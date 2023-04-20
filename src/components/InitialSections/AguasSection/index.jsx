import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import FeatureList from '../../FeatureList';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaAguas from '../../../assets/images/aguas/capaAguas.png';
import ContainerRow from '../../Containes/ContainerRow';

export default function AguasSection(props) {
  return (
    <div className="bg-gray">
      <Container>
        <Title title="Águas Subterrâneas e Superficiais">
          <p>
            Confira as atividades de XXXX das águas superficiais e subterrâneas.
          </p>
        </Title>

        <ContainerRow
          title="De importância crucial, "
          titleMuted="os recursos hídricos da região do RMB"
          paragraf="  são fontes de abastecimento para a população, agricultura, recarga dos ciclos ambientais entre outras funções naturais. Planos ambientais específicos fazem o monitoramento das características das águas do sítio do RMB antes mesmo do início das obras. As Águas superficiais do Ribeirão do Ferro e do Rio Sorocaba são analisadas em pontos a montante e a jusante do empreendimento. As águas subterrâneas são analisadas através de 12 poços de monitoramento instalados ao longo do perímetro local."
          img={CapaAguas}
          btnTitle="Veja mais"
          tip="Águas"
          btnLink="/aguas"
        />
      </Container>
    </div>
  );
}
