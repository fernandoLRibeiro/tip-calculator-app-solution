import React, { useEffect, useState } from "react";
import { Input, Label } from "./RadioButtonStyles";

function RadioButton({ value, id, tip, setTip }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (tip === value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [tip, value]);

  return (
    <>
      <Input
        id={id}
        value={value}
        type="radio"
        onChange={() => {
          setTip(value);
          setChecked(true);
        }}
        checked={checked}
      />
      <Label htmlFor={id}>{`${value}%`}</Label>
    </>
  );
}

export default RadioButton;
