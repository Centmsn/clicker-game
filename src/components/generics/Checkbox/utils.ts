import { fadeOut } from "style/utils";

export const getBackgroundColor = (isDisabled: boolean, color: string) => {
  return isDisabled ? fadeOut(color, 0.25) : "none";
};
