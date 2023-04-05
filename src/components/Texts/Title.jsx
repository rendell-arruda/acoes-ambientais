import React from 'react';

export default function Title({ title, children }) {
  return (
    <div className="text-center">
      <h4 className=" border-bottom fs-3 ">{title}</h4>
      <span className=" pt-2">{children}</span>
    </div>
  );
}
