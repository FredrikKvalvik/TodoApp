import Button from "./Button";

import React from "react";

const PrimaryButton = ({ children, classes, onClick }) => {
  return (
    <Button classes={classes} onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
