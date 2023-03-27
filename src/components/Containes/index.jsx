import React from 'react';

export default function Container(props) {
  return (
    <div className="container-xxl py-4 d-flex flex-column">
      {props.children}
    </div>
  );
}
