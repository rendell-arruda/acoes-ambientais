import React from 'react';
import './ArqSection.css';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import CapaArq from '../../../assets/images/arqueologia/capArq.png';
import ContainerRow from '../../Containes/ContainerRow';

export default function ArqueologiaSection(props) {
  return (
    <div className="bg-green-light">
      <Container>
        <Title title="Sítio Arqueológico Jibóia">
          <p>
            Pesquisa Arqueológica realizada na ADA - Área Diretamente Afetada
            pelo empreendimento.
          </p>
        </Title>

        <ContainerRow
          title="O patrimônio arqueológico, "
          titleMuted="entendido como um bem da sociedade nacional"
          paragraf="  é protegido pela Constituição Federal e por leis específicas como a Lei nº 3.924/61, que assegura sua preservação antes de qualquer obra que possa vir a danificá-lo.
          O empreendimento RMB está projetado em uma área com potencial arqueológico, segundo dados históricos e etno-históricos, já executa importantes etapas de seu PPAEP - Programa de Prospecção Arqueológica e Educação Patrimonial .
          "
          img={CapaArq}
          btnTitle="Veja mais"
          tip="Arqueologia"
          btnLink="/arqueologia"
        />
      </Container>
    </div>
  );
}
