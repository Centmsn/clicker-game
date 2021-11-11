import { RootState } from "state";

export const captureStoreState = (state: RootState) => {
  const test = JSON.stringify(state);

  return test;
};
