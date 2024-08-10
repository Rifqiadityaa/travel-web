import Button from "@/components/Button";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DrawerProps } from "./types";

const Drawer: FC<DrawerProps> = ({ items, open, setDrawerOpen }) => {
  return (
    <div
      className={`flex justify-center items-center fixed z-[999] inset-y-0 right-0 transition-all duration-300 bg-[#004040] ${
        open ? "w-full" : "w-0"
      }`}
    >
      {open && (
        <Button
          icon={<AiOutlineClose />}
          variant="icon"
          className="border-white text-white absolute top-6 right-6"
          onClick={() => {
            setDrawerOpen(false);
          }}
        />
      )}
      <ul
        className={`flex flex-col text-center items-center justify-center gap-6 ${
          open ? "" : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-base font-bold text-white px-6 py-4 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
        <Button
          text="Need Assistance?"
          className={"hover:bg-[#D6B66B] hover:border-[#D6B66B]"}
        />
      </ul>
    </div>
  );
};

export default Drawer;
