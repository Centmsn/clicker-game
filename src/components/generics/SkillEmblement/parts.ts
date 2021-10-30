import styled from "styled-components";
import woodenSword from "assets/Temporary_Assets/woodenSword.png";

export const SkillIcon = styled.div`
  width: 15%;
  height: 100%;
  /* filter: ${{}}grayscale(1); */
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
