export interface ModalProps {
  isVisible: boolean;
  setVisible?: (arg: boolean) => void;
  onConfirm?: () => void;
}
