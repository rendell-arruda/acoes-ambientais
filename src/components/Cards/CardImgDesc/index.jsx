import React from 'react';
import './CardImgDesc.css';
import { Link } from 'react-router-dom';

export default function CardImgDesc(props) {
  return (
    <Link className="cardLink " to={props.page}>
      <div className="cardLong">
        <div
          className="img"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">{props.title}</p>
          </div>
          <p className="p">{props.desc}</p>
          <div></div>
        </div>
      </div>
    </Link>
  );
}
