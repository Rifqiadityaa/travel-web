import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, onClick, variant, className }) => {
  const isFilled = variant === "filled";
  const isIcon = variant === "icon";

  const getButtonStyleByVariant = () => {
    if (isFilled)
      return "bg-[#004040] border-[#004040] hover:bg-[#D6B66B] hover:border-[#D6B66B]";

    if (isIcon)
      return "px-5 py-3 hover:bg-[#004040] border-[#004040] hover:text-white text-[#004040]";
    return "border-white hover:bg-[#004040] hover:border-[#004040]";
  };

  return (
    <button
      className={twMerge(
        "text-white px-6 py-3 rounded-full border-2 transition-all duration-300 ease-in-out w-fit",
        getButtonStyleByVariant(),
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
