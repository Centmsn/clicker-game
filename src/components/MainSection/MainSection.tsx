import { Title } from "components/generics/Title/parts";
import MainClickableItem from "components/MainClickableItem";
import * as P from "./parts";

const MainSection = () => {
  return (
    <P.Wrapper>
      <P.TitleWrapper>
        <Title variant="large">Dungeon Clicker</Title>
      </P.TitleWrapper>

      <P.ButtonWrapper>
        <MainClickableItem />
      </P.ButtonWrapper>
    </P.Wrapper>
  );
};

export default MainSection;
