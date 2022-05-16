import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  width: 64%;
  padding: 2em;
  justify-content: space-between;
  border-radius: 1em;
  gap: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  width: 50%;
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
    color: ${({ theme }) => theme.colors.neutral.darkGrayishCyan};
  }
`;

export const ResultsContainer = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  border-radius: 0.5em;
`;
