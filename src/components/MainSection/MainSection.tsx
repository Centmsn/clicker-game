import { Title } from "components/generics/Title/parts";
import Unit from "components/Unit";
import * as P from "./parts";

const MainSection = () => {
  return (
    <P.Wrapper>
      <P.TitleWrapper>
        <Title>Dungeon Clicker</Title>
      </P.TitleWrapper>

      <P.ButtonWrapper>
        <Unit />
      </P.ButtonWrapper>
    </P.Wrapper>
  );
};

export default MainSection;
