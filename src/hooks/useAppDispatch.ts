import { useDispatch } from "react-redux";
import type { AppDispatch } from "state/constants";

export const useAppDispatch = () => useDispatch<AppDispatch>();
