import { SkillDescProps } from "./constants";
import coin from "assets/Additional_Assets/coinSpin.gif";
import * as P from "./parts";

const SkillDesc = ({ name, price, level, desc }: SkillDescProps) => {
  return (
    <P.Wrapper>
      <p>Ability: {name}</p>
      <p>Level: {level}</p>
      <p>
        Upgrade cost: {price}
        <P.Coin alt="coin" src={coin} />
      </p>
      <p>
        Description: <em>{desc}</em>
      </p>
    </P.Wrapper>
  );
};

export default SkillDesc;
