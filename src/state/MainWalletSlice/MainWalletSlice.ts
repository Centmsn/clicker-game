import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_INCREMENT, INITIAL_WALLET_VALUE, MIN_INCREMENT, MIN_WALLET_VALUE, initialState } from "./constants";

export const mainWalletSlice = createSlice({
  name: "MainWallet",
  initialState,
  reducers: {
    addToWallet: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    removeFromWallet: (state, action: PayloadAction<number>) => {
      const newWalletValue = Math.max(state.value - action.payload, MIN_WALLET_VALUE);
      state.value = newWalletValue;
    },
    clearWallet: (state) => {
      state.value = INITIAL_WALLET_VALUE;
    },
    increaseIncrement: (state, action: PayloadAction<number>) => {
      state.incrementPerSecond += action.payload;
    },
    decreaseIncrement: (state, action: PayloadAction<number>) => {
      const newIncrementValue = Math.max(state.incrementPerSecond - action.payload, MIN_INCREMENT);
      state.incrementPerSecond = newIncrementValue;
    },
    clearIncrement: (state) => {
      state.incrementPerSecond = INITIAL_INCREMENT;
    },
  },
});

export const { addToWallet, removeFromWallet, clearWallet, clearIncrement, decreaseIncrement, increaseIncrement } =
  mainWalletSlice.actions;

export default mainWalletSlice.reducer;
