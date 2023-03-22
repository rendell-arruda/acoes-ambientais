import React from 'react';
import FeatureItem from './FeatureItem';
import IconTask from '../../assets/images/icons/icon-task.png';
import IconMap from '../../assets/images/icons/iconMap.png';
import IconTree from '../../assets/images/icons/icon-tree.png';

export default function FeatureList(props) {
  return (
    <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
      <FeatureItem icon={IconTask} title="Cadastro de Matrizes">
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </FeatureItem>
      <FeatureItem icon={IconMap} title="Áreas de Plantio">
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </FeatureItem>
      <FeatureItem icon={IconTree} title="Viveiro Piloto">
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </FeatureItem>
    </div>
  );
}
