import { LayoutGroup } from "framer-motion";
import Toast from "components/generics/Toast";
import { useAppSelector } from "hooks/useAppSelector";
import { toastStackStackSelector } from "state";
import { useToastStack } from "hooks/useToastStack";
import * as P from "./parts";

const ToastStack = () => {
  const { closeSelectedToast } = useToastStack();
  const toastStack = useAppSelector(toastStackStackSelector);

  return (
    <P.StackWrapper>
      {/* <LayoutGroup> */}
      {toastStack.map(({ msg, id, variant }) => (
        <Toast variant={variant} onClose={() => closeSelectedToast(id)} key={id} isVisible>
          {msg}
        </Toast>
      ))}
      {/* </LayoutGroup> */}
    </P.StackWrapper>
  );
};

export default ToastStack;
