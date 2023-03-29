import React from 'react';

export default function SubTitle(props) {
  return (
    <div className="text-center">
      <span className="fs-5 fw-semibold">{props.desc}</span>
    </div>
  );
}
