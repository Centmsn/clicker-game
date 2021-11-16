import { useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addToWallet } from "state";
import * as P from "./parts";

const MainClickableItem = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useAppDispatch();

  const handleMainButtonClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const handleAddToWallet = () => {
    dispatch(addToWallet(1));
  };

  return (
    <P.Button
      onMouseDown={handleMainButtonClick}
      onMouseUp={handleMainButtonClick}
      onClick={handleAddToWallet}
      isClicked={isButtonClicked}
    ></P.Button>
  );
};

export default MainClickableItem;
