import React from "react";

const Wrapper = ({ children, bgColor }) => {
  return (
    <div
      className={`lg:w-9/12 lg:px-8 lg:py-12 p-4 w-full mx-auto bg-${bgColor} min-h-screen`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
