import { combineReducers } from "@reduxjs/toolkit";
import ExampleSlice from "./ExampleSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  example: ExampleSlice,
});
