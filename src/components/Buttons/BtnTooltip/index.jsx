import React from 'react';
import './BtnTooltip.css';
import { Link } from 'react-router-dom';

export default function BtnTooltip(props) {
  return (
    <Link to={props.link} className="uiverse">
      <div>
        <span className="tooltip">{props.tip}</span>
        <span>{props.title}</span>
      </div>
    </Link>
  );
}
