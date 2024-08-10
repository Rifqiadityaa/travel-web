import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ArticledCardProps } from "./types";

const ArticlesCard: FC<ArticledCardProps> = ({ image, title, href }) => {
  return (
    <Link
      href={href || "#"}
      className="w-full flex flex-col first:lg:row-span-2 first:lg:col-span-2"
    >
      <div className="relative aspect-square w-full h-full ">
        <Image
          src={image}
          alt="article poster"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </div>
      <div className="bg-[#0B7373] py-6 px-4">
        <p className="line-clamp-2 font-bold text-base text-white">{title}</p>
      </div>
    </Link>
  );
};

export default ArticlesCard;
