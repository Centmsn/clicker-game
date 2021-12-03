// import { useState } from "react";
import RegularList from "components/generics/RegularList";
import ListItem from "./ListItem/ListItem";
import { useAppSelector } from "hooks/useAppSelector";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import { ListItemProps } from "./ListItem/constants";
import * as P from "./parts";
import { useToastStack } from "hooks/useToastStack";

const OptionsTab = () => {
  const appState = useAppSelector((state) => state);
  const { openNewToast } = useToastStack();

  const handleSaveGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
    openNewToast("Game saved!");
  };

  const OptionsList: Array<ListItemProps["listItemData"]> = [
    {
      description: "Click to manually save the game",
      label: "Save game",
      onClick: handleSaveGame,
    },
    {
      description: "Enable autosave (every 5 minutes)",
      label: "",
      onClick: handleSaveGame,
    },
  ];

  return (
    <P.Wrapper>
      <ul>
        <RegularList items={OptionsList} resourceName="listItemData" itemComponent={ListItem} />
      </ul>
    </P.Wrapper>
  );
};

export default OptionsTab;
