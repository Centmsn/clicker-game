import { isInBrowser } from "utils/isInBrowser";
import { getAllItemsFromLS } from "./getAllItems";
import { LocalStorage } from "./constants";

export const getItemFromLS = <T extends keyof LocalStorage>(key: T): LocalStorage[T] | void => {
  if (isInBrowser()) {
    const currentLsValue = getAllItemsFromLS();

    if (currentLsValue) {
      return currentLsValue[key];
    }
  }
};
