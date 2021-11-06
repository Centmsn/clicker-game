import { combineReducers } from "@reduxjs/toolkit";
import UpgradesReducer from "./UpgradesSlice";
import MainWalletReducer from "./MainWalletSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  heroes: UpgradesReducer,
  wallet: MainWalletReducer,
});
