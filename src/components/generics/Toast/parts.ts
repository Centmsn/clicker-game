import styled from "styled-components";
import { StyledWrapperProps } from "./constants";

export const Wrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  width: ${({ theme }) => theme.styles.width_medium};
  height: ${({ theme }) => theme.styles.height_medium};
  border: ${({ theme }) => theme.styles.border_solid_tight};

  background-color: ${({ variant, theme }) => theme.colors[variant]};

  text-align: center;
  line-height: 75px;
  color: ${({ theme }) => theme.colors.black};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;
  margin: 5px;

  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Info = styled.p`
  margin: 0 auto;

  font-size: 0.8rem;
`;
