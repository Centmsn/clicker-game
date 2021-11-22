import { useAppDispatch } from "./useAppDispatch";
import { actions } from "state";

export const useMainWallet = () => {
  const dispatch = useAppDispatch();

  return Object.fromEntries(
    Object.entries(actions).map((action) => [
      action[0],
      function <T extends number>(arg: T) {
        return dispatch(action[1](arg));
      },
    ])
  );
};
