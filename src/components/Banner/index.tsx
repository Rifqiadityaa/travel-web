import Link from "next/link";
import { FC } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import ZamroodLogo from "../DynamicAssets/ZamroodLogo";
import { BannerProps } from "./types";

const Banner: FC<BannerProps> = ({ bgImage, description, href }) => {
  const formattedHref = href.split("https://www.")[1];

  return (
    <div
      className="max-h-[200px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 py-6 px-20 lg:px-6"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0.4) 100%), url(${
          bgImage || "/assets/images/banner_bg.jpeg"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <ZamroodLogo />
      <div className="text-center text-white lg:text-right">
        <p className="text-sm lg:text-base">{description}</p>
        <div className="flex items-center justify-center lg:justify-end gap-2">
          <Link
            href={href}
            className="text-base lg:text-xl font-bold underline"
            passHref
            target="_blank"
          >
            {formattedHref}
          </Link>
          <LiaExternalLinkAltSolid size={20} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
