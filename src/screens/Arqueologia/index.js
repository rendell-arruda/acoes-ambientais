import React from 'react';
import './arqueologiaPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ParallaxImage from '../../components/ParallaxImage';
import Timeline from '../../components/Timeline';
import Title from '../../components/Texts/Title';
import FeatureItem from '../../components/FeatureList/FeatureItem';

import Capa from '../../assets/images/arqueologia/Capa.jpg';

import timeline1 from '../../assets/images/arqueologia/timeline1.jpg';
import timeline2 from '../../assets/images/arqueologia/timeline2.jpg';
import timeline3 from '../../assets/images/arqueologia/timeline3.png';
import timeline4 from '../../assets/images/arqueologia/timeline4.jpg';
import arqueoExemple from '../../assets/images/arqueologia/arqueoExemple.png';
import icon1 from '../../assets/images/icons/icons-1.png';
import icon2 from '../../assets/images/icons/icons-2.png';
import icon3 from '../../assets/images/icons/icons-3.png';

export default function Arqueologia() {
  return (
    <div>
      <Header />
      <ParallaxImage img={Capa}>Sítio Arqueologico</ParallaxImage>
      <Container>
        <Timeline
          year1="2013"
          title1="Diagnóstico Inicial"
          text1="A Área Diretamente Afetada (ADA) do RMB passou por Diagnóstico Arqueológico não-interventivo, localizando cinco ocorrências arqueológicas, fato que embasou a realização do Programa de Prospecção Arqueológica e de um Programa de Educação Patrimonial, da ADA do RMB."
          img1={timeline1}
          year2="2020"
          title2="Programas de Prospecção Arqueológica e Educação Patrimonial"
          text2="O programa foi planejado para verificação em 200 pontos e em um caminhamento oportunistico localizou-se 49 fragmentos cerâmicos. Após o ocorrido foram realizadas mais 10 sondagens extras"
          img2={timeline2}
          year3="2020"
          title3="Nomeação do Sítio Arqueológico"
          text3="Os estudos realizados fundamentaram a decisão da declaração de Sítio Arqueológico Indígena Pré-Histórico denominado Jiboia 1, e recebeu tal nome em alusão a uma cobra que foi encontrada no local durante as escavações."
          img3={timeline3}
          year4="2020"
          title4="Delimitação do Local"
          text4="Uma área ao redor dos fragmentos encontrados foi isolada,  com a recomendação de atenção e monitoramento arqueológico quando houver início dos trabalhos com máquinas nesta área, a fim de verificar se há ocorrência de outros vestígios arqueológicos."
          img4={timeline4}
        />
      </Container>
      <Container>
        <Title title="Encontrei um artefato e agora?">
          Ao se deparar com um objeto que possa ser vestígio arqueológico tenha
          calma e siga as instruções a seguir:
        </Title>
        <>
          <div className="rowArtefato">
            <div className="">
              <img
                className="img-fluid"
                src={arqueoExemple}
                alt="Desenho de um vestígio arqueológico"
              />
            </div>
            <div className="">
              <FeatureItem
                icon={icon1}
                title="Isole a área"
                desc="Ao encontrar um artefato arqueológico, isole a área para que outras pessoas não possam mexer no local onde foi encontrado. Marque o local com estacas, pedras ou outros objetos para delimitar a área."
              ></FeatureItem>
              <FeatureItem
                icon={icon2}
                title="Avise ao gestor ambiental"
                desc="De imediato entre em contato com o responsável pela fiscalização ambiental da área ou qualquer pessoa da Gerência de Implantação da Amazul. O órgão ambiental responsável pela preservação do patrimônio arqueológico da região do RMB será contatado."
              ></FeatureItem>
              <FeatureItem
                icon={icon3}
                title="Registre o ocorrido"
                desc=" Tire fotos do artefato e do local onde foi encontrado. Anote a data, hora e localização exata do achado. Esse registro é importante para a preservação do patrimônio, para atividades de curadoria e para continuidade na documentação histórica do sítio arqueológico Jiboia I."
              ></FeatureItem>
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </div>
  );
}
