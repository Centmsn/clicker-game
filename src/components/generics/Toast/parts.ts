import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledWrapperProps } from "./constants";

const variants = { hidden: { x: "25vw", transition: { duration: 0.1 } } };

export const Wrapper = styled(motion.div).attrs(() => ({
  variants,
}))<StyledWrapperProps>`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

<<<<<<< HEAD
  width: ${({ theme }) => theme.styles.width.medium};
  height: ${({ theme }) => theme.styles.height.medium};
  border: ${({ theme }) => theme.styles.border.solid_black_tight};
=======
  width: 300px;
  height: 75px;
  padding: 5px;
  margin: 5px 0;
  border: solid black 2px;
>>>>>>> main

  background-color: ${({ variant, theme }) => theme.colors[variant]};

  text-align: center;
<<<<<<< HEAD
  line-height: ${({ theme }) => theme.styles.line_height.great};
=======
>>>>>>> main
  color: ${({ theme }) => theme.colors.black};
  transition: 300ms;
`;

export const CloseButton = styled.button`
<<<<<<< HEAD
  position: absolute;
  top: 0;
  right: 0;

  width: ${({ theme }) => theme.styles.width.tiny};
  height: ${({ theme }) => theme.styles.height.tiny};
  margin: ${({ theme }) => theme.styles.margins.tiny};

=======
>>>>>>> main
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

<<<<<<< HEAD
  font-size: ${({ theme }) => theme.styles.font_sizes.small};
=======
  display: flex;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
>>>>>>> main
`;
