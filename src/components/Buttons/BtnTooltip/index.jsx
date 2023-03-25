import React from 'react';
import './BtnTooltip.css';
import { Link } from 'react-router-dom';

export default function BtnTooltip(props) {
  return (
    <Link to={props.link} class="uiverse">
      <div>
        <span class="tooltip">{props.tip}</span>
        <span>{props.title}</span>
      </div>
    </Link>
  );
}
