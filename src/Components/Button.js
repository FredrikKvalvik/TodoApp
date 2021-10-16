import React from "react";

const Button = ({ children, onClick, classes }) => {
  return (
    <button className={`${classes} p-2 border-2 rounded-lg`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
