import styled from "styled-components";
import { StyledWrapperProps } from "./constants";

export const Wrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  width: 300px;
  height: 75px;
  border: solid black 2px;

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
