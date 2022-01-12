export interface ModalProps {
  children: any;
  isVisible: boolean;
  setVisible?: (arg: boolean) => void;
  callback?: () => void;
}
