import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledWrapperProps } from "./constants";

const variants = {
  visible: { x: 0, transition: { duration: 0.5 } },
  hidden: { x: "-50vh" },
  exit: { x: "-50vh" },
};

export const Wrapper = styled(motion.div).attrs(() => ({
  initial: "hidden",
  exit: "exit",
  variants,
}))<StyledWrapperProps>`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 300px;
  height: 75px;
  padding: 5px;
  margin: 5px 0;
  border: solid black 2px;

  background-color: ${({ variant, theme }) => theme.colors[variant]};

  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  transition: 300ms;
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
