import centaur from "assets/centaur.png";
import * as P from "./parts";

const Unit = () => {
  const clickUnit = (e: any, scale: any) => {
    e.target.style.transform = `scale(${scale})`;
  };

  return (
    <P.Wrapper>
      <P.Image onMouseDown={(e) => clickUnit(e, 0.9)} onMouseUp={(e) => clickUnit(e, 1)} alt="centaur" src={centaur} />
    </P.Wrapper>
  );
};

export default Unit;
