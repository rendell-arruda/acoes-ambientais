import React from 'react';
import './CardImgDesc.css';
import { Link } from 'react-router-dom';

export default function CardImgDesc({ page, img, title, desc }) {
  return (
    <Link className="cardLink " to={page}>
      <div className="cardLong">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">{title}</p>
          </div>
          <p className="p">{desc}</p>
          <div></div>
        </div>
      </div>
    </Link>
  );
}
