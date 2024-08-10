"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { HeroProps } from "./types";

const Hero: FC<HeroProps> = ({ bgImage }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/home#destinations");
  };

  return (
    <section
      id="hero"
      className={`h-screen w-full flex flex-col max-lg:justify-center justify-end max-lg:items-center items-start gap-6 max-lg:px-4 p-44 max-lg:text-center`}
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h5 className="max-lg:text-7xl text-9xl font-thesignature max-lg:-mb-6 -mb-14 text-[#D6B66B]">
          Premium Travel
        </h5>
        <p className="text-white font-unbounded max-lg:text-xl text-[3.4rem]">
          Beyond Expectation
        </p>
        <p className="max-lg:text-base text-2xl text-white max-lg:max-w-[400px] max-w-[700px] mt-2">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
      </div>
      <Button
        text="Take me there"
        className="hover:bg-[#D6B66B] hover:border-[#D6B66B]"
        onClick={onClick}
      />
    </section>
  );
};

export default Hero;
