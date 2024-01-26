import IConfirmModal from "../../interfaces/IConfirmModal";

const ConfirmationModal = (props: IConfirmModal) => {
  const { isVisible, onClose, onClick, isBuy } = props;

  const handleBack = () => {
    onClose();
  };

  const handleClick = () => {
    onClick();
    handleBack();
  }

  return (
    <div
      className={
        isVisible
          ? "fixed bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex flex-row justify-center"
          : "hidden"
      }
    >
      <div className="flex flex-col justify-center">
        <button
          onClick={handleBack}
          className="font-bold text-3xl text-white text-left m-3"
        >
          X
        </button>
        <div className="bg-white p-8 rounded h-fit">
          <p className="text-center text-3xl font-bold">
            Are you sure you want to {isBuy ? "buy" : "sell"} the product?
          </p>
          <div className="flex justify-end">
            <button
              className="p-3 bg-black text-white rounded mt-5 font-medium text-2xl"
              onClick={handleClick}
            >
              {isBuy ? "Buy" : "Sell"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
