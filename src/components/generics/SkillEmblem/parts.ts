import styled from "styled-components";
import woodenSword from "assets/Temporary_Assets/woodenSword.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 14px;
`;

export const SkillIcon = styled.div`
  width: 30%;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px black solid;
  background-image: url(${woodenSword});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 4px ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const LevelUpButton = styled.button`
  border: solid 2px white;
  border-radius: 10%;
  padding: 2px;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  font-size: 10px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
  }

  & img {
    height: 50%;
    width: 35%;
  }
`;
