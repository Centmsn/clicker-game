import styled from "styled-components";
import { StyledLevelUpButtonProps } from "./constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 32%;

  font-size: 0.4rem;
`;

export const SkillDesc = styled(Wrapper)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  height: 100%;
  padding: 5px;

  line-height: 0.5rem;
`;

export const SkillEmblem = styled.div<StyledLevelUpButtonProps>`
  width: 25%;
  height: 90%;

  border: 1px black solid;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LevelUpButton = styled.button<StyledLevelUpButtonProps>`
  border: solid 2px white;
  border-radius: 10%;
  padding: 2px;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  font-size: 0.4rem;
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  & img {
    height: 50%;
    width: 35%;
  }
`;
