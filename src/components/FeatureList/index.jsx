import React from 'react';
import FeatureItem from './FeatureItem';
import IconTask from '../../assets/images/icons/icon-task.png';
import IconMap from '../../assets/images/icons/iconMap.png';
import IconTree from '../../assets/images/icons/icon-tree.png';
import Spline from '@splinetool/react-spline';

export default function FeatureList(props) {
  return (
    <div className="row g-5  row-cols-1 row-cols-lg-3">
      <FeatureItem
        icon={IconTask}
        title="Cadastro de Matrizes"
        desc="Mapeamento e resgate de Germoplasma (matrizes arbóreas e coleta de sementes) em áreas previstas para intervenção florestal. Para retratar melhor a vegetação presente no RMB, toda a extensão do território do sítio foi considerada. Essas atividades estão previstas no Subprograma de salvamento de Germoplasma."
      >
        {/* <Spline scene="https://prod.spline.design/DnUxq4fEn69Lm5cn/scene.splinecode" /> */}
      </FeatureItem>
      <FeatureItem
        icon={IconMap}
        title="Áreas de Plantio"
        desc="No período entre 2020 e início de 2022 foi realizado um plantio de quase 9000 mudas de árvores nativas. Nessa primeira abordagem foram executadas medidas para recomposição das Matas Ciliares do ribeirão do Ferro, de acordo com PMCF – Programa de Manejo e Conservação da Flora. "
      >
        {/* <Spline scene="https://prod.spline.design/DOLn2L3S6MZ3fgdW/scene.splinecode" /> */}
      </FeatureItem>
      <FeatureItem
        icon={IconTree}
        title="Viveiro Piloto"
        desc=" Tem o objetivo de produzir mudas nativas para o projeto de reflorestamento, recuperação de áreas degradadas e demais atividades do Programa de Conservação de Flora. O espaço tem tomado forma com a experiência de reprodução de espécies cadastradas no sítio do RMB além de sementes coletadas no entorno próximo, em especial as cercanias da floresta nacional de Ipanema."
      >
        {/* <Spline scene="https://prod.spline.design/W9pKunxaP9I8sK7F/scene.splinecode" /> */}
      </FeatureItem>
    </div>
  );
}
