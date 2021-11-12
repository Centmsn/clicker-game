import { Title } from "components/generics/Title/parts";
import MainClickableItem from "components/MainClickableItem";
import OptionsTab from "components/OptionsTab";
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

      <Tabs tabTitles={["Options", "Achievements", "Upgrades"]}>
        <OptionsTab />
        <p>Second tab component</p>
        <p>Fourth tab component</p>
      </Tabs>
    </P.Wrapper>
  );
};

export default MainSection;
