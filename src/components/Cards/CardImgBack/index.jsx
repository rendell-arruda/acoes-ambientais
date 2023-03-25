import React, { Children } from 'react';
import './CardImgBack.css';

export default function CardImgBack(props) {
  return (
    <div className="cardN">
      <div className="temporary_text">
        <img src={props.imgCard} alt="Fim fim Macho" height="250" width="300" />
      </div>
      <div className="card_content">
        <span className="card_title">{props.name}</span>
        <span className="card_subtitle">{props.scientificName} </span>
        <p className="card_description">{props.children}</p>
        <p className="card_font">{props.reference}</p>
      </div>
    </div>
  );
}
