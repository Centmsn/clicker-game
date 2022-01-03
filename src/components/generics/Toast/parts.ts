import styled from "styled-components";
import { StyledWrapperProps } from "./constants";

export const Wrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  width: ${({ theme }) => theme.styles.width.medium};
  height: ${({ theme }) => theme.styles.height.medium};
  border: ${({ theme }) => theme.styles.border.solid_black_tight};

  background-color: ${({ variant, theme }) => theme.colors[variant]};

  text-align: center;
  line-height: ${({ theme }) => theme.styles.line_height.great};
  color: ${({ theme }) => theme.colors.black};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: ${({ theme }) => theme.styles.width.tiny};
  height: ${({ theme }) => theme.styles.height.tiny};
  margin: ${({ theme }) => theme.styles.margins.tiny};

  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Info = styled.p`
  margin: 0 auto;

  font-size: ${({ theme }) => theme.styles.font_sizes.small};
`;
