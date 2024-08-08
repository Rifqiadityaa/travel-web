import { FC } from "react";
import Button from "../Button";
import HamburgerMenu from "../DynamicAssets/HamburgerMenu";
import ZamroodLogo from "../DynamicAssets/ZamroodLogo";

const Navbar: FC<NavbarProps> = ({ items, logo }) => {
  return (
    <nav className="flex justify-between fixed w-full max-xl:p-4 px-44 py-6 z-50 max-xl:bg-white">
      {logo || <ZamroodLogo />}
      <div className="max-[1400px]:hidden flex">
        <ul className="flex gap-6 ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-base font-bold text-white px-6 py-4 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
            >
              {item.label}
            </a>
          ))}
          <Button text="Need Assistance?" />
        </ul>
      </div>

      <div className="min-[1400px]:hidden">{logo || <HamburgerMenu />}</div>
    </nav>
  );
};

export default Navbar;
