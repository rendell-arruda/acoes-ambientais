import React from 'react';

export default function Title(props) {
  return (
    <div className="text-center">
      <h4 className=" border-bottom fs-3 ">{props.title}</h4>
      <span className=" pt-2">{props.children}</span>
    </div>
  );
}
