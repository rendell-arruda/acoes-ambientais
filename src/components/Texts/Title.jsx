import React from 'react';

export default function Title(props) {
  return (
    <div>
      <h4 className=" text-center border-bottom fs-3 ">{props.title}</h4>
      <span className=" text-center pt-2">{props.children}</span>
    </div>
  );
}
