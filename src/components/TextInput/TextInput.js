import React from "react";
import { Icon, Input, InputContainer } from "./TextInputStyles";

function TextInput({
  icon,
  value,
  setValue,
  placeholder,
  setError,
  error,
  custom,
}) {
  const handleChange = (e) => {
    if (
      (!Number(e.target.value) &&
        e.target.value !== "" &&
        e.target.value !== "0") ||
      Number(e.target.value) < 0
    ) {
      return;
    } else {
      setValue(e.target.value);
    }

    if (e.target.value == "0") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <InputContainer error={error} custom={custom}>
      {/* Only show an Icon if it has an icon prop */}
      {icon && <Icon src={icon} />}

      <Input
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder={placeholder ? `${placeholder}` : "0"}
      />
    </InputContainer>
  );
}

export default TextInput;
