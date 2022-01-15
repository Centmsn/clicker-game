import { getItemFromLS } from "utils/localStorage/getItem";
import { LocalStorageKeys } from "utils/localStorage/constants";
import { isEmpty } from "utils/isEmpty";
import { RootState } from "state";
import * as H from "constants/Heroes";

export type UpgradesState = Array<H.HeroBase>;

const savedInitialState: RootState = JSON.parse(getItemFromLS(LocalStorageKeys.gameState) || "{}");
export const defaultInitialState = H.HEROES;
export const initialState: UpgradesState = isEmpty(savedInitialState) ? defaultInitialState : savedInitialState.heroes;
