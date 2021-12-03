import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const OptionsSlice = createSlice({
  name: "OptionsSlice",
  initialState,
  reducers: {
    toggleAutosave(state, action: PayloadAction<boolean>) {
      state.autosave = action.payload;
    },
  },
});

export const { toggleAutosave } = OptionsSlice.actions;

export default OptionsSlice.reducer;
