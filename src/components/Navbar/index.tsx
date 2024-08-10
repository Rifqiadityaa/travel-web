"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Button from "../Button";
import HamburgerMenu from "../DynamicAssets/HamburgerMenu";
import ZamroodLogo from "../DynamicAssets/ZamroodLogo";
import Drawer from "./Drawer";

const Navbar: FC<NavbarProps> = ({ items, logo }) => {
  const [navBoxVisible, setNavBoxVisible] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavBoxVisible(true);
      } else {
        setNavBoxVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Drawer
        open={isMobileDrawerOpen}
        setDrawerOpen={setIsMobileDrawerOpen}
        items={items}
      />
      <nav
        className={`flex justify-between fixed w-full p-4 xl:px-44 py-6 z-50 max-xl:bg-white transition-all ease-in-out duration-500 ${
          navBoxVisible ? "xl:bg-[#004040]" : "xl:bg-transparent"
        }`}
      >
        {logo || <ZamroodLogo />}
        <div className="max-[1400px]:hidden flex">
          <ul className="flex gap-6 ">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-base font-bold text-white px-6 py-4 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Button
              text="Need Assistance?"
              className={`${
                navBoxVisible ? "hover:bg-[#D6B66B] hover:border-[#D6B66B]" : ""
              }`}
            />
          </ul>
        </div>

        <div
          className="min-[1400px]:hidden"
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          {logo || <HamburgerMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
