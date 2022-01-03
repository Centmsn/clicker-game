import SkillDesc from "./SkillDesc";
import { SkillEmblemProps } from "./constants";
import * as P from "./parts";

const SkillEmblem = ({ onClick, upgradeData, isDisabled = false }: SkillEmblemProps) => {
  const handleOnClick = () => {
    if (isDisabled) return;
    if (onClick) onClick();
  };

  return (
    <P.Wrapper>
      <P.SkillEmblem image={upgradeData.image} onClick={handleOnClick} isDisabled={isDisabled} />
      <SkillDesc
        desc={upgradeData.desc}
        price={upgradeData.price}
        level={upgradeData.upgradeLevel}
        name={upgradeData.name}
      />
    </P.Wrapper>
  );
};

export default SkillEmblem;
