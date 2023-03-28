import React from 'react';

export default function FeatureItem(props) {
  return (
    <div className=" py-2">
      <div className="col d-flex gap-2">
        <div className="d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-3">
          <img src={props.icon} />
        </div>
        <h3 className="fs-4">{props.title}</h3>
      </div>
      <p>{props.children}</p>
    </div>
  );
}
