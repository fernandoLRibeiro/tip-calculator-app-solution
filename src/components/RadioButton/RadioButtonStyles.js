import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1.25em;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.lightGrayishCyan};
    color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.strongCyan};
    color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    background-color: ${({ theme }) => theme.colors.primary.strongCyan};
    color: ${({ theme }) => theme.colors.neutral.veryDarkCyan};
  }
`;
