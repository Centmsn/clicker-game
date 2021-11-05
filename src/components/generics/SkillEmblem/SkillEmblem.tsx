import * as P from "./parts";
import coin from "assets/Coin_spin.gif";

const SkillEmblem = () => {
  return (
    <P.Wrapper>
      <P.SkillIcon />
      <p>level 1</p>
      <P.LevelUpButton>
        level up
        <p>
          25
          <img alt="shine" src={coin} />
        </p>
      </P.LevelUpButton>
    </P.Wrapper>
  );
};

export default SkillEmblem;
