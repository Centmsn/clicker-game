import { RootState } from "state";

export const captureStoreState = (state: RootState) => {
  const stringifiedAppState = JSON.stringify(state);

  return stringifiedAppState;
};
