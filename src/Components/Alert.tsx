// import React from 'react'
// rafce -> React Arrow Function Component Export

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      My Button
    </div>
  );
};

export default Alert;
