import styled from "styled-components";
import { motion } from "framer-motion";

const variants = { hidden: { x: "-25vw" } };

export const StackWrapper = styled(motion.div).attrs(() => ({
  animate: "hidden",
  variants,
}))`
  position: absolute;
  left: 5px;
  bottom: 5px;

  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
