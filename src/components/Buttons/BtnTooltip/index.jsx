import React from 'react';
import { Link } from 'react-router-dom';
import './BtnTooltip.css';

export default function BtnTooltip({ link, tip, title }) {
  return (
    <a href={link} className="uiverse">
      <div>
        <span className="tooltip">{tip}</span>
        <span>{title}</span>
      </div>
    </a>
  );
}
