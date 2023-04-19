import React from 'react';
import './CardImgDesc.css';
import { Link } from 'react-router-dom';

export default function CardImgDesc({ link, img, title, desc }) {
  return (
    <a className="cardLink " href={link}>
      <div className="cardLong">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="textBox">
          <div className="textContent">
            <p className="font-1-s">{title}</p>
          </div>
          <p className="font-1-xs">{desc}</p>
          <div></div>
        </div>
      </div>
    </a>
  );
}
