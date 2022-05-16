import React from "react";
import { Icon, Input, InputContainer } from "./TextInputStyles";

function TextInput({ icon, value, setValue }) {
  const handleChange = (e) => {
    if (
      (!Number(e.target.value) && e.target.value !== "") ||
      Number(e.target.value) < 0
    ) {
      return;
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <InputContainer>
      <Icon src={icon} />
      <Input
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="0"
      />
    </InputContainer>
  );
}

export default TextInput;
