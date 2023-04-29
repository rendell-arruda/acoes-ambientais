import React from 'react';
import './titleRegis.css';

export default function TitleRegis({ children, name }) {
  return (
    <div className="titleRegis">
      {children}
      <span>{name}</span>
    </div>
  );
}
