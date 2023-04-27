import React from 'react';

export default function FeatureItem(props) {
  return (
    <div className="p-2">
      <div className="col d-flex gap-2 align-items-start justify-content-start flex-column">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-inline-flex align-items-center justify-content-center  text-bg-primary bg-gradient fs-2 rounded-3">
            <img src={props.icon} />
          </div>
          <h3 className="font-2-m">{props.title}</h3>
        </div>
        <p className="font-2-xs">{props.desc}</p>
      </div>

      {/* <div style={{ height: '240px' }}>{props.children}</div> */}
    </div>
  );
}
