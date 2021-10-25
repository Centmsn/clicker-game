import { isInBrowser } from "utils/isInBrowser";

// TODO: define LS structure, and values which should be hold inside
export interface LocalStorage {
  example: string;
}

/**
 * All other keys are inside object which is assigned to this key
 * @example
 * {
 *    clickerGame: {
 *      exampleKey: "exampleValue"
 *   }
 * }
 */
const LOCAL_STORAGE_APP_KEY = "clickerGame";

export const useLocalStorage = () => {
  const getAllItemsFromLS = (): LocalStorage | void => {
    if (isInBrowser()) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP_KEY) || "");
    }
  };

  const getItemFromLS = (key: keyof LocalStorage) => {
    if (isInBrowser()) {
      const currentLsValue = getAllItemsFromLS();

      if (currentLsValue) {
        return currentLsValue[key];
      }
    }
  };

  const saveItemToLS = (key: string, value: string | number | object): void => {
    if (isInBrowser()) {
      const currectLsValue = getAllItemsFromLS();
      const newLsValue = { ...currectLsValue, [key]: value };

      localStorage.setItem(key, JSON.stringify(newLsValue));
    }
  };

  return { getAllItemsFromLS, getItemFromLS, saveItemToLS };
};
