import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2em 1em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.veryLightGrayishCyan};
  border-radius: 0.5em;
  cursor: pointer;

  &:hover,
  &:active {
    outline: 0.15em solid ${({ theme }) => theme.colors.primary.strongCyan};
  }
`;

export const Icon = styled.img``;

export const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  font-size: 1.5em;
  border: 0;
  outline: none;
  background-color: transparent;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.neutral.veryDarkGrayishCyan};
  margin: 0;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.grayishCyan};
  }
`;