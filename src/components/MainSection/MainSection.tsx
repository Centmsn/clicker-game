import { Title } from "components/generics/Title/parts";
import Treasure from "components/Treasure";
import * as P from "./parts";

const MainSection = () => {
  return (
    <P.Wrapper>
      <P.TitleWrapper>
        <Title>Dungeon Clicker</Title>
      </P.TitleWrapper>

      <P.ButtonWrapper>
        <Treasure />
      </P.ButtonWrapper>
    </P.Wrapper>
  );
};

export default MainSection;
