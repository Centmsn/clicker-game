import SkillEmblement from "../SkillEmblement";
import { PropsWithChildren } from "react";
import { UpgradeCardProps } from "./constants";
import * as P from "./parts";

const UpgradeCard = () => {
  return (
    <P.Card>
      <P.HeroName>Magnus</P.HeroName>
      <P.HeroLevel>level 27</P.HeroLevel>
      <P.HorizontalLine />
      <P.HeroPortrait />
      <P.LevelUpSection>
        levelUp <P.LevelUpButton>🆙</P.LevelUpButton> cost: 12k 🪙
      </P.LevelUpSection>
      <P.UpgradesSkillsWrapper>
        <SkillEmblement />
        <SkillEmblement />
        <SkillEmblement />
        <SkillEmblement />
        <SkillEmblement />
      </P.UpgradesSkillsWrapper>
    </P.Card>
  );
};

export default UpgradeCard;
