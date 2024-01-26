import IFullImageModal from "../../interfaces/IFullImageModal";

const FullImageModal = (props: IFullImageModal) => {
  const { isVisible, onClose, imageUrl } = props;
  return (
    <div className="fixed bg-black bg-opacity-70 top-0 left-0 w-screen h-fit flex justify-center">
      <div
        className={isVisible ? "hidden " : "visible pt-5 pb-32 overflow-hidden"}
      >
        <div>
          <button onClick={onClose} className="font-bold text-3xl text-white">
            X
          </button>
          <img
            src={imageUrl}
            className="h-screen self-center bg-white p-8 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default FullImageModal;
