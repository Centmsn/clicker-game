import RegularList from "components/generics/RegularList";
import ListItem from "./ListItem/ListItem";
import { useAppSelector } from "hooks/useAppSelector";
import { saveItemToLS } from "utils/localStorage/saveItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { captureStoreState } from "utils/captureStoreState";
import { ListItemProps } from "./ListItem/constants";
import * as P from "./parts";

const OptionsTab = () => {
  const appState = useAppSelector((state) => state);
  const handleSaveGame = () => {
    saveItemToLS(LocalStorageKeys.gameState, captureStoreState(appState));
  };

  const OptionsList: Array<ListItemProps["listItemData"]> = [
    {
      description: "Click to manually save the game",
      label: "Save game",
      onClick: handleSaveGame,
    },
  ];

  return (
    <P.Wrapper>
      <RegularList items={OptionsList} resourceName="listItemData" itemComponent={ListItem} />
    </P.Wrapper>
  );
};

export default OptionsTab;
