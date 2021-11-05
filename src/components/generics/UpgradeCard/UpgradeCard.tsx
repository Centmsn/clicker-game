import SkillEmblem from "components/generics/SkillEmblem";
import * as P from "./parts";

const UpgradeCard = () => {
  return (
    <P.Card>
      <P.HeroInfo>Magnus level 27</P.HeroInfo>
      <P.HorizontalLine />
      <P.HeroPortrait />

      <P.UpgradesSkillsWrapper>
        <SkillEmblem />
        <SkillEmblem />
        <SkillEmblem />
        <SkillEmblem />
        <SkillEmblem />
      </P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
