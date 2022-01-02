import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "components/generics/Toast";
import ToastStackContext from "contexts/ToastStackContext";
import * as P from "./parts";

const ToastStack = () => {
  const { closeToastById, toastStack } = useContext(ToastStackContext);

  return (
    <AnimatePresence>
      <P.StackWrapper>
        {toastStack.map(({ msg, id, variant }) => (
          <Toast variant={variant} onClose={() => closeToastById(id)} key={id} isVisible>
            {msg}
          </Toast>
        ))}
      </P.StackWrapper>
    </AnimatePresence>
  );
};

export default ToastStack;
