import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import './CardImgBack.css';

export default function CardImgBack({
  imgCard,
  link,
  name,
  scientificName,
  children,
  reference,
  linkTitle
}) {
  return (
    <div className="cardN">
      <div className="temporary_text">
        <img src={imgCard} alt="Fim fim Macho" height="250" width="290" />
      </div>
      <div className="card_content">
        <span className="card_title font-1-s">{name}</span>
        <span className="card_subtitle ">{scientificName} </span>
        <span className="card_description">{children}</span>
        <p className="card_font">{reference}</p>
        <a href={link} className="btn btn-link btn-sm p-0 m-0">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}
