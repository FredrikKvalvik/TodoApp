import Button from "./Button";

import React from "react";

const PrimaryButton = ({ children, styles }) => {
  const styles = `${styles}`;
  return <Button styles={styles}>{children}</Button>;
};

export default PrimaryButton;
