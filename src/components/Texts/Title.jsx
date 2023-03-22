import React from 'react';

export default function Title(props) {
  return (
    <div className="pt-4">
      <h4 class=" text-center border-bottom fs-3 ">{props.title}</h4>
      <p class=" text-center pt-2">{props.children}</p>
    </div>
  );
}
