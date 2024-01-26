import IButton from "../interfaces/IButton";

const Button = (props: IButton) => {
  const { text, className, textStyle, onClick } = props;
  return (
    <div>
      <button className={className} onClick={onClick}>
        <p className={textStyle}>
          {text}
        </p>
      </button>
    </div>
  );
};

export default Button;
