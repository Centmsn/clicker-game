import { isInBrowser } from "utils/isInBrowser";
import { LocalStorage, LOCAL_STORAGE_APP_KEY } from "./constants";

export const getAllItemsFromLS = (): LocalStorage | void => {
  if (isInBrowser()) {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP_KEY) || JSON.stringify({}));
  }
};
