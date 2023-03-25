import React from 'react';
import './CardImgDesc.css';
import { Link } from 'react-router-dom';

export default function CardImgDesc(props) {
  return (
    <Link className="cardLink " to={props.page}>
      <div class="cardLong">
        <div class="img" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div class="textBox">
          <div class="textContent">
            <p class="h1">{props.title}</p>
          </div>
          <p class="p">{props.desc}</p>
          <div></div>
        </div>
      </div>
    </Link>
  );
}
