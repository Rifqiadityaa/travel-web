import { FC } from "react";
import { ExperienceCardProps } from "./types";

const ExperienceCard: FC<ExperienceCardProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-9">
      {icon}
      <div>
        <h5 className="text-[#0B7373] font-bold mb-2 text-base lg:text-2xl uppercase">
          {title}
        </h5>
        <p className="leading-5 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
