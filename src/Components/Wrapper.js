import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="lg:w-9/12 lg:px-8 lg:py-12 p-4 w-full mx-auto bg-white min-h-screen">
      {children}
    </div>
  );
};

export default Wrapper;
