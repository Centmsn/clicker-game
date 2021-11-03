import { useState } from "react";
import * as P from "./parts";

const Unit = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMainButtonClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  return (
    <P.Button
      onMouseDown={handleMainButtonClick}
      onMouseUp={handleMainButtonClick}
      isClicked={isButtonClicked}
    ></P.Button>
  );
};

export default Unit;
