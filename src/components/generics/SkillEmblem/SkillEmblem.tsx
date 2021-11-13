import { SkillEmblemProps } from "./constants";
import * as P from "./parts";
import coin from "assets/Coin_spin.gif";

const SkillEmblem = ({ onClick, level, price, isDisabled = false }: SkillEmblemProps) => {
  const handleOnClick = () => {
    if (isDisabled) return;

    onClick();
  };

  return (
    <P.Wrapper>
      <P.SkillEmblem />
      <p>level {level}</p>
      <P.LevelUpButton onClick={handleOnClick} isDisabled={isDisabled}>
        level up
        <p>
          {price}
          <img alt="shine" src={coin} />
        </p>
      </P.LevelUpButton>
    </P.Wrapper>
  );
};

export default SkillEmblem;
