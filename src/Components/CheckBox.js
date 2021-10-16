import { React, useState } from "react";

import { ReactComponent as Circle } from "./../resources/SVGs/circle.svg";
import { ReactComponent as CheckCircle } from "./../resources/SVGs/check-circle.svg";

const CheckBox = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <label className="cursor-pointer" htmlFor={`check${id}`}>
      <input
        id={`check${id}`}
        className="hidden"
        type="checkbox"
        name="isComplete"
        onChange={handleChange}
      />
      {!isChecked && <Circle />}
      {isChecked && <CheckCircle />}
    </label>
  );
};

export default CheckBox;
