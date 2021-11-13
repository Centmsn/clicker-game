import { isInBrowser } from "utils/isInBrowser";
import { getAllItemsFromLS } from "./getAllItems";
import { LOCAL_STORAGE_APP_KEY } from "./constants";

export const saveItemToLS = (key: string, value: string | number | object): void => {
  if (isInBrowser()) {
    const currectLsValue = getAllItemsFromLS();
    const newLsValue = { ...currectLsValue, [key]: value };

    localStorage.setItem(LOCAL_STORAGE_APP_KEY, JSON.stringify(newLsValue));
  }
};
