import React from "react";
import { Icon, Input, InputContainer } from "./TextInputStyles";

function TextInput({ icon, value, placeholder }) {
  return (
    <InputContainer>
      <Icon src={icon} />
      <Input value={value} placeholder="0" />
    </InputContainer>
  );
}

export default TextInput;
