import { FC } from "react";
import ZamroodLogo from "../DynamicAssets/ZamroodLogo";
import { BannerProps } from "./types";

const Banner: FC<BannerProps> = ({ bgImage }) => {
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
        <p className="text-sm lg:text-base">
          Want to see other destinations? Check us out at our website
        </p>
        <div>
          <a className="text-base lg:text-xl font-bold underline">
            pandooin.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
