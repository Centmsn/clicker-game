import { SkillEmblemProps } from "./constants";
import * as P from "./parts";

const SkillEmblem = ({ onClick, isDisabled = false }: SkillEmblemProps) => {
  const handleOnClick = () => {
    if (isDisabled) return;

    onClick();
  };

  return <P.SkillIcon onClick={handleOnClick} isDisabled={isDisabled} />;
};

export default SkillEmblem;
