import { combineReducers } from "@reduxjs/toolkit";
import UpgradesReducer from "./HeroesSlice";
import MainWalletReducer from "./MainWalletSlice";
import OptionsReducer from "./OptionsSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  heroes: UpgradesReducer,
  wallet: MainWalletReducer,
  options: OptionsReducer,
});
