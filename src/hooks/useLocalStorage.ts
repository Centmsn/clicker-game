import { isInBrowser } from "utils/isInBrowser";

// TODO: define LS structure, and values which should be hold inside
export interface LocalStorage {
  example: string;
  example2: number;
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
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP_KEY) || JSON.stringify({}));
    }
  };

  /**
   * Returns value linked to the provided key
   * @param key - key name (which is used in LS)
   */
  const getItemFromLS = <T extends keyof LocalStorage>(key: T): LocalStorage[T] | void => {
    if (isInBrowser()) {
      const currentLsValue = getAllItemsFromLS();

      if (currentLsValue) {
        return currentLsValue[key];
      }
    }
  };

  /**
   * Creates new key inside LS or overwrites existing one
   * @param key - key name which will be used inside LS
   * @param value - value will be linked to the provided key
   */
  const saveItemToLS = (key: string, value: string | number | object): void => {
    if (isInBrowser()) {
      const currectLsValue = getAllItemsFromLS();
      const newLsValue = { ...currectLsValue, [key]: value };

      localStorage.setItem(LOCAL_STORAGE_APP_KEY, JSON.stringify(newLsValue));
    }
  };

  return { getAllItemsFromLS, getItemFromLS, saveItemToLS };
};
