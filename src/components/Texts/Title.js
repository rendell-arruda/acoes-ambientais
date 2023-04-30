import React from 'react';

export default function Title({ title, children }) {
  return (
    <div className="text-center">
      <h4 className=" border-bottom font-1-xl ">{title}</h4>
      <span className=" pt-2 font-2-m ">{children}</span>
    </div>
  );
}
