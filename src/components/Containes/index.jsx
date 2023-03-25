import React from 'react';

export default function Container(props) {
  return (
    <div className="container-xxl py-3 d-flex flex-column">
      {props.children}
    </div>
  );
}
