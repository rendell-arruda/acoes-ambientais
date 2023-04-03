import React from 'react';
import BtnTooltip from '../Buttons/BtnTooltip';

export default function ContainerRow({
  title,
  titleMuted,
  paragraf,
  link,
  img,
  btnTitle,
  tip,
  btnLink,
  target,
  children
}) {
  return (
    <>
      <div className="d-flex align-items-center containerRow py-4">
        <div className="conteudoRow d-flex flex-column text-center">
          <h2 className="featurette-heading fw-normal lh-1">
            {title}
            <br /> <span className="text-muted">{titleMuted}</span>
          </h2>
          <p className="lead">{paragraf}</p>
          {children}
          <BtnTooltip
            title={btnTitle}
            tip={tip}
            link={btnLink}
            target={target}
          />
        </div>

        <img src={img} className="img-fluid mx-auto" />
      </div>
    </>
  );
}
