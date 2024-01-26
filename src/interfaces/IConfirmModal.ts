interface IConfirmModal {
  isVisible: boolean;
  onClose: () => void;
  onClick: () => void;
  isBuy: boolean;
}

export default IConfirmModal;
