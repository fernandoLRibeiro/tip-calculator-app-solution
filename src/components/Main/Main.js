import React, { useEffect, useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import TextInput from "../TextInput/TextInput";
import {
  CustomTipInput,
  Form,
  InputGroup,
  InputLabel,
  InputLabelGroup,
  RadioButtonGrid,
  ResetButton,
  Result,
  ResultAmount,
  ResultLabel,
  ResultLabelContainer,
  ResultsContainer,
  ResultSubtitle,
  RightContainer,
  StyledMain,
} from "./MainStyles";

function Main() {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tip, setTip] = useState("");
  const [resetDisabled, setResetDisabled] = useState(true);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [numberOfPeopleError, setNumberOfPeopleError] = useState(false);
  const [customTip, setCustomTip] = useState("");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleReset = () => {
    setBill("");
    setNumberOfPeople("");
    setTip("");
  };

  useEffect(() => {
    setTip(customTip);
  }, [customTip]);

  useEffect(() => {
    if (bill || numberOfPeople || tip) {
      setResetDisabled(false);
    } else {
      setResetDisabled(true);
    }

    if (bill && numberOfPeople && tip) {
      setTipAmount((bill * (tip / 100)) / numberOfPeople);
      setTotal((Number(bill) + bill * (tip / 100)) / numberOfPeople);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, numberOfPeople, tip]);

  return (
    <StyledMain>
      <Form>
        <InputGroup>
          <InputLabelGroup>
            <InputLabel>Bill</InputLabel>
          </InputLabelGroup>

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
            <TextInput
              id="custom-tip"
              type="text"
              placeholder="Custom"
              value={customTip}
              setValue={setCustomTip}
              custom
            />
          </RadioButtonGrid>
        </InputGroup>

        <InputGroup>
          <InputLabelGroup>
            <InputLabel>Number of People</InputLabel>
            {numberOfPeopleError && (
              <InputLabel error>Can't be zero</InputLabel>
            )}
          </InputLabelGroup>

          <TextInput
            icon="./images/icon-dollar.svg"
            value={numberOfPeople}
            setValue={setNumberOfPeople}
            error={numberOfPeopleError}
            setError={setNumberOfPeopleError}
          />
        </InputGroup>
      </Form>

      <RightContainer>
        <ResultsContainer>
          <Result>
            <ResultLabelContainer>
              <ResultLabel>Tip Amount</ResultLabel>
              <ResultSubtitle>/ person</ResultSubtitle>
            </ResultLabelContainer>

            <ResultAmount>{formatter.format(tipAmount)}</ResultAmount>
          </Result>

          <Result>
            <ResultLabelContainer>
              <ResultLabel>Total</ResultLabel>
              <ResultSubtitle>/ person</ResultSubtitle>
            </ResultLabelContainer>

            <ResultAmount>{formatter.format(total)}</ResultAmount>
          </Result>
        </ResultsContainer>

        <ResetButton onClick={handleReset} disabled={resetDisabled}>
          Reset
        </ResetButton>
      </RightContainer>
    </StyledMain>
  );
}

export default Main;
