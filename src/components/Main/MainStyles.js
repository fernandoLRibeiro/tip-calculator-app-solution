import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  width: 64%;
  padding: 2em;
  justify-content: space-between;
  border-radius: 1em;
  gap: 2em;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    border-radius: 1em 1em 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.neutral.darkGrayishCyan};
`;

export const RadioButtonGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1em;
  grid-column-gap: 1em;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const CustomTipInput = styled.input`
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1.25em;
  border-radius: 0.25em;
  width: 100%;
  outline: none;
  border: 0;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.neutral.veryLightGrayishCyan};
  color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  text-align: right;

  &:hover {
    outline: 0.15em solid ${({ theme }) => theme.colors.primary.strongCyan};
  }

  &::placeholder {
    text-align: center;
    color: ${({ theme }) => theme.colors.neutral.grayishCyan};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  border-radius: 0.5em;
  padding: 2em;
  gap: 2em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ResultLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultLabel = styled.p`
  color: ${({ theme }) => theme.colors.neutral.veryLightGrayishCyan};
  margin: 0;
`;

export const ResultSubtitle = styled.p`
  font-size: 0.8em;
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral.lightGrayishCyan};
`;

export const ResultAmount = styled.h1`
  color: ${({ theme }) => theme.colors.primary.strongCyan};
  margin: 0;
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.25em;
  padding: 0.25em;
  outline: none;
  border: 0;
  border-radius: 0.2em;
  background-color: ${({ theme }) => theme.colors.primary.strongCyan};
  color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  text-transform: uppercase;
  font-family: inherit;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.neutral.lightGrayishCyan};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.darkGrayishCyan};
    cursor: default;
  }
`;
