import styled from "styled-components";
import { StyledLevelUpButtonProps } from "./constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 33%;

  font-size: ${({ theme }) => theme.styles.font_sizes.tiny};
`;

export const SkillDesc = styled(Wrapper)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  height: 100%;
  padding: ${({ theme }) => theme.styles.paddings.small};
`;

export const SkillEmblem = styled.div<StyledLevelUpButtonProps>`
  width: 25%;
  height: 90%;

  border: ${({ theme }) => theme.styles.border.solid_black_tight};
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
  border: ${({ theme }) => theme.styles.border.solid_white_tight};
  border-radius: 10%;
  padding: ${({ theme }) => theme.styles.paddings.tiny};

  background-color: ${({ theme }) => theme.colors.primaryDark};

  font-size: ${({ theme }) => theme.styles.font_sizes.tiny};
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  cursor: pointer;
  filter: grayscale(${({ isDisabled }) => (isDisabled ? 1 : 0)});

  & img {
    height: 50%;
    width: 35%;
  }
`;
