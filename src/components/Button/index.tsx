import { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, onClick, variant }) => {
  const isFilled = variant === "filled";

  const getButtonStyleByVariant = () => {
    if (isFilled) return "bg-[#004040] border-[#004040]";
    return "border-white hover:bg-[#004040] hover:border-[#004040]";
  };

  return (
    <button
      className={
        "text-white px-6 py-3 rounded-full border-2 transition-all duration-300 ease-in-out" +
        getButtonStyleByVariant()
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
