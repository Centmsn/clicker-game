import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 30vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
