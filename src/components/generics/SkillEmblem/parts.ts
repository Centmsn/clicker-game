import styled from "styled-components";
import { StyledSkillEmblemProps } from "./constants";
import woodenSword from "assets/Temporary_Assets/woodenSword.png";

export const SkillIcon = styled.div<StyledSkillEmblemProps>`
  width: 15%;
  height: 50%;
  border: 1px black solid;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${woodenSword});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  transition: 0.3s;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  &:hover {
    box-shadow: 0 0 2px 4px ${({ theme }) => theme.colors.primary};

    background-color: ${({ theme }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;
