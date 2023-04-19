import React from 'react';
import './containerRow.css';
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
      <div className="d-flex align-items-center containerRow  justify-content-between py-4">
        <div className="conteudoRow d-flex flex-column text-top  ">
          <h2 className="featurette-heading font-1-l ">
            {title}
            <br /> <span className="text-muted">{titleMuted}</span>
          </h2>
          <p className="font-2-s">{paragraf}</p>
          {children}
          <BtnTooltip
            title={btnTitle}
            tip={tip}
            link={btnLink}
            target={target}
          />
        </div>

        <img src={img} className="img-fluid " />
      </div>
    </>
  );
}
