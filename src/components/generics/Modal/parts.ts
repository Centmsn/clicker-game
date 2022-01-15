import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.dim};
`;

export const ModalWindow = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30vw;
  height: 30vh;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
