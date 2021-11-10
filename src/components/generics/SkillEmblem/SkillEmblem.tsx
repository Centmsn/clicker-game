import { SkillEmblemProps } from "./constants";
import SkillDesc from "./SkillDesc";
import * as P from "./parts";

const SkillEmblem = ({ onClick, image, level, desc, name, price, isDisabled = false }: SkillEmblemProps) => {
  const handleOnClick = () => {
    if (isDisabled) return;
    if (onClick) onClick();
  };

  return (
    <P.Wrapper>
      <P.SkillEmblem image={image} onClick={handleOnClick} isDisabled={isDisabled} />
      <SkillDesc desc={desc} price={price} level={level} name={name} />
    </P.Wrapper>
  );
};

export default SkillEmblem;
