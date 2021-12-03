import { useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { addToWallet, walletGoldPerClickSelector } from "state";
import * as P from "./parts";

const MainClickableItem = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const goldPerClick = useAppSelector(walletGoldPerClickSelector);
  const dispatch = useAppDispatch();

  const handleMainButtonClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const handleAddToWallet = () => {
    dispatch(addToWallet(goldPerClick));
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
