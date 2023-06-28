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
import { FcBinoculars, FcBiomass, FcLandscape } from 'react-icons/fc';
import { FaMapMarkedAlt } from 'react-icons/fa';

export default function FaunaSection(props) {
  return (
    <div className="bg-green">
      <Container>
        <Title title="Fauna RMB">
          Atividades desenvolvidas no âmbito dos programas de Monitoramento e
          Conservação de Fauna.
        </Title>

        <div className="tasksFlora">
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="d-flex gap-1 align-items-center pb-2">
                <FcLandscape size={25} color={'#9da65d'} />
                <h5 className="font-2-m m-0">Corredores ecológicos</h5>
              </div>
              <p className="font-2-xs">
                Monitorar a fauna presente na ADA – Área Diretamente Afetada
                pelo empreendimento, fortalece a preservação de espécies e a
                conservação da biodiversidade. Os fragmentos de floresta
                estacional semidecidual presentes no local constituem um
                “corredor ecológico” vital com especial conectividade com a
                FLONA – Florestal Nacional de Ipanema. Conhecer a vida selvagem
                local ajuda a tomar medidas de proteção ambiental adequadas,
                essas atividades estão previstas no PRMCFTA - Programa de
                Resgate, Monitoramento e Conservação de Fauna Terrestre e
                Aquática.
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex gap-2 align-items-center pb-2">
                <FcBiomass size={25} color={'#9da65d'} />
                <h5 className="font-2-m m-0">Impactos previstos</h5>
              </div>
              <p className="font-2-xs">
                O monitoramento é uma ferramenta essencial para verificar
                possíveis interferências e impactos decorrentes da implantação e
                operação do empreendimento sobre os grupos faunísticos da área.
                Nesse contexto, esse acompanhamento assume um papel fundamental
                como componente das estratégias de proteção e conservação da
                fauna. Os parâmetros e índices ecológicos começaram a ser
                coletados antes do início das obras e devem ser constantemente
                analisados.
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex gap-2 align-items-center pb-2">
                <FcBinoculars size={25} />
                <h5 className="font-2-m m-0">Observações recentes</h5>
              </div>
              <p className="font-2-xs">
                Apesar de fragmentada e alterada, a vegetação presente na região
                serve de abrigo e recurso para importantes representantes da
                biodiversidade faunística da Mata Atlântica e cerrado.
                Levantamentos realizados na FLONA de Ipanema apontaram a
                ocorrência de 39 espécies da herpetofauna, 349 espécies de aves
                e 70 de mamíferos. Os primeiros estudos do licenciamento
                ambiental do RMB mostraram uma riqueza de espécies reduzida,
                sendo 36 espécies da herpetofauna, 69 espécies de aves e 13
                espécies de mamíferos. Porém entre elas foram registradas
                espécies ameaçadas de extinção como a perdiz (Rhynchotus
                rufescens) e a jaguatirica (Leopardus pardalis). A última
                campanha realizada em 2021, reafirmam a presença de animais
                ameaçados de extinção como o tamanduá-bandeira (Myrmecophaga
                tridactyla), novamente a jaguatirita e o veado-catingueiro
                (Mazama gouazouobira).
              </p>
            </div>
          </div>
        </div>

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
            procurando alimento.
          </CardImgBack>
        </div>
        <div className=" align-self-center">
          <BtnTooltip link="/fauna" tip="Fauna Page" title="Veja Mais" />
        </div>
      </Container>
    </div>
  );
}
