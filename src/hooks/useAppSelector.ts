import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "state/constants";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
