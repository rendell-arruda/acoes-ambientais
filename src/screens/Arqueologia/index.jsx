import React from 'react';
import './arqueologiaPage.css';
import CarouselHeader from '../../components/Carousels/CarouselHeader';
import Container from '../../components/Containes';
import ContainerRow from '../../components/Containes/ContainerRow';
import Timeline from '../../components/Timeline';
import Title from '../../components/Texts/Title';
import FeatureItem from '../../components/FeatureList/FeatureItem';
import img1 from '../../assets/images/arqueologia/slider1.jpg';
import img2 from '../../assets/images/arqueologia/slider2.jpg';
import img3 from '../../assets/images/arqueologia/slider3.jpg';
import timeline1 from '../../assets/images/arqueologia/timeline1.jpg';
import timeline2 from '../../assets/images/arqueologia/timeline2.jpg';
import timeline3 from '../../assets/images/arqueologia/timeline3.jpg';
import timeline4 from '../../assets/images/arqueologia/timeline3.jpg';
import arqueoExemple from '../../assets/images/arqueologia/arqueoExemple.png';
import icon1 from '../../assets/images/icons/icons-1.png';
import icon2 from '../../assets/images/icons/icons-2.png';
import icon3 from '../../assets/images/icons/icons-3.png';

export default function Arqueologia() {
  return (
    <div>
      <CarouselHeader
        img1={img1}
        img2={img2}
        img3={img3}
        title="Sítio Arqueológico Jibóia I"
        subtitle="  Descriçao breve do que seria essa pagina do sitio arque com algumas
              atividades."
        desc1="  Descriçao breve do que seria essa pagina da flora com algumas
    atividades."
        desc2=" Some representative placeholder content for the third slide of
    this carousel."
      />
      <Container>
        <Timeline
          img1={timeline1}
          img2={timeline2}
          img3={timeline3}
          img4={timeline4}
        />
      </Container>
      <Container>
        <Title title="Encontrei um artefato e agora?">
          {/* Siga esses passos ao encontrar um objeto no Sítio Arqueológico */}
        </Title>
        <Container>
          <div className="d-flex rowArtefato gap-4">
            <div className="">
              <h5>
                Ao se deparar com um objeto que possa ser vestígio arqueológico
                tenha calma e siga as instruções a seguir.
              </h5>
              <img
                className="img-fluid"
                src={arqueoExemple}
                alt="Desenho de um vestígio arqueológico"
              />
            </div>
            <div className="">
              <FeatureItem icon={icon1} title="Isole a área">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </FeatureItem>
              <FeatureItem icon={icon2} title="Avise ao gestor ambiental">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </FeatureItem>
              <FeatureItem icon={icon3} title="Registre o ocorrido">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </FeatureItem>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
