import React from 'react';
import './BtnTooltip.css';
import { Link } from 'react-router-dom';

export default function BtnTooltip({ link, tip, title, target }) {
  return (
    <a href={link} className="uiverse" target={target}>
      <div>
        <span className="tooltip">{tip}</span>
        <span>{title}</span>
      </div>
    </a>
  );
}
