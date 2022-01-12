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

  font-size: ${({ theme }) => theme.styles.font_sizes.large};

  transition: ${({ theme }) => theme.styles.transitions.fast};

  &:hover {
    transform: scale(1.1);

    cursor: pointer;
  }
`;

export const Confirmation = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ConfirmBtn = styled.button`
  border: ${({ theme }) => theme.styles.border.solid_black_normal};
  padding: ${({ theme }) => theme.styles.paddings.small};
  cursor: pointer;
`;
