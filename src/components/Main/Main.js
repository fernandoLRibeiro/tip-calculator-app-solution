import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import TextInput from "../TextInput/TextInput";
import {
  CustomTipInput,
  Form,
  InputGroup,
  InputLabel,
  RadioButtonGrid,
  ResultsContainer,
  StyledMain,
} from "./MainStyles";

function Main() {
  const [bill, setBill] = useState(undefined);
  const [numberOfPeople, setNumberOfPeople] = useState(undefined);
  const [tip, setTip] = useState(undefined);

  return (
    <StyledMain>
      <Form>
        <InputGroup>
          <InputLabel>Bill</InputLabel>
          <TextInput
            icon="./images/icon-dollar.svg"
            value={bill}
            setValue={setBill}
          />
        </InputGroup>

        <InputGroup>
          <InputLabel>Select Tip %</InputLabel>
          <RadioButtonGrid>
            <RadioButton value="5" id="5" tip={tip} setTip={setTip} />
            <RadioButton value="10" id="10" tip={tip} setTip={setTip} />
            <RadioButton value="15" id="15" tip={tip} setTip={setTip} />
            <RadioButton value="25" id="25" tip={tip} setTip={setTip} />
            <RadioButton value="50" id="50" tip={tip} setTip={setTip} />
            <CustomTipInput
              id="custom-tip"
              type="text"
              placeholder="Custom"
              onChange={(e) => {
                setTip(e.target.value);
              }}
            />
          </RadioButtonGrid>
        </InputGroup>

        <InputGroup>
          <InputLabel>Number of People</InputLabel>
          <TextInput
            icon="./images/icon-dollar.svg"
            value={numberOfPeople}
            setValue={setNumberOfPeople}
          />
        </InputGroup>
      </Form>

      <ResultsContainer></ResultsContainer>
    </StyledMain>
  );
}

export default Main;
