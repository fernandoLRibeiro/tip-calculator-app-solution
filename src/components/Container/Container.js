import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-end;
    gap: 2.5em;
  }
`;
