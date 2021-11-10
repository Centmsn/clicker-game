import { Title } from "components/generics/Title/parts";
import MainClickableItem from "components/MainClickableItem";
import Tabs from "./Tabs";
import * as P from "./parts";

const MainSection = () => {
  return (
    <P.Wrapper>
      <P.TitleWrapper>
        <Title>Dungeon Clicker</Title>
      </P.TitleWrapper>

      <P.ButtonWrapper>
        <MainClickableItem />
      </P.ButtonWrapper>

      <Tabs tabTitles={["Upgrades", "Options", "Shop"]}>
        <p>First tab component</p>
        <p>Second tab component</p>
        <p>Third tab component</p>
      </Tabs>
    </P.Wrapper>
  );
};

export default MainSection;
