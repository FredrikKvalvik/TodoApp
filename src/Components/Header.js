import React from "react";

const Header = ({ children, bgColor }) => {
  return <div className={`py-8 bg-${bgColor}`}>{children}</div>;
};

export default Header;
