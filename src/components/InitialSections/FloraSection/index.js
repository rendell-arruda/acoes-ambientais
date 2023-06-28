import React from 'react';
import Title from '../../Texts/Title';
import Container from '../../Containes';
import CardImgDesc from '../../Cards/CardImgDesc';
import Subtitle from '../../Texts/SubTitle';
import BtnTooltip from '../../Buttons/BtnTooltip';
import CapaAcoita from '../../../assets/images/flora/matrizes/acoita/acoitaCapa.jpg';
import CapaAmendoin from '../../../assets/images/flora/matrizes/amendoinBravo/amendoinBravoSemente.jpg';
import CapaJatoba from '../../../assets/images/flora/matrizes/jatoba/jatobaArvore.JPG';
import CapaCopaiba from '../../../assets/images/flora/matrizes/copaiba/copaibaArvore.jpg';
import { FcInspection, FcBiomass, FcCloseUpMode } from 'react-icons/fc';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function FloraSection() {
  return (
    <Container>
      <Title title="Flora RMB">
        <p>
          Atividades desenvolvidas no âmbito dos programas de Monitoramento e
          Conservação de Flora.
        </p>
      </Title>

      <div className="tasksFlora">
        <div className="row pt-4">
          <div className="col-md-4">
            <div className="d-flex gap-1 align-items-center pb-2">
              <FcInspection size={25} color={'#9da65d'} />
              <h5 className="font-2-m m-0">Cadastro de Matrizes</h5>
            </div>
            <p className="font-2-xs">
              Mapeamento e resgate de Germoplasma (matrizes arbóreas e coleta de
              sementes) em áreas previstas para intervenção florestal.
              Atividades previstas previstas no Subprograma de salvamento de
              Germoplasma.
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex gap-2 align-items-center pb-2">
              <FcCloseUpMode size={25} color={'#9da65d'} />
              <h5 className="font-2-m m-0">Viveiro Piloto</h5>
            </div>
            <p className="font-2-xs">
              Objetivando a produção de mudas nativas para o reflorestamento,
              recuperação de áreas degradadas e atividades do Programa de
              Conservação de Flora.
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex gap-2 align-items-center pb-2">
              <FaMapMarkedAlt size={25} color={'#9da65d'} />
              <h5 className="font-2-m m-0">Áreas de Plantio</h5>
            </div>
            <p className="font-2-xs">
              Entre 2020 e 2022 foi realizado um plantio de quase 9000 mudas de
              árvores nativas para recomposição das Matas Ciliares do ribeirão
              do Ferro, de acordo com o Programa de Manejo e Conservação da
              Flora.
            </p>
          </div>
        </div>
      </div>

      <Subtitle desc="Matrizes em Destaque" />
      <div className="gap-4 py-2 d-flex justify-content-center flex-wrap align-items-center">
        <CardImgDesc
          title="Açoita Cavalo"
          desc="Matriz : M 2082"
          img={CapaAcoita}
          link="/acoita"
        />
        <CardImgDesc
          title="Amendoim Bravo"
          img={CapaAmendoin}
          desc="Matriz : M 909"
          link="/amendoim"
        />
        <CardImgDesc
          title="Jatobá"
          desc="Matriz : M 262"
          img={CapaJatoba}
          link="/jatoba"
        />
        <CardImgDesc
          title="Copaíba"
          desc="Matriz : M 248"
          img={CapaCopaiba}
          link="/copaiba"
        />
      </div>

      <div className="align-self-center">
        <BtnTooltip
          title="Veja mais"
          tip="Flora Page"
          className="align-content-end "
          link="/flora"
        />
      </div>
    </Container>
  );
}
