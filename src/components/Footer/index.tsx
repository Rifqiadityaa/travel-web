import Link from "next/link";
import { FC } from "react";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ copyrightText, socials }) => {
  return (
    <footer className="flex max-lg:gap-4 max-lg:flex-col max-lg:text-center justify-between items-center bg-[#004040] px-4 lg:px-44 py-6 text-white">
      <p>{copyrightText}</p>
      <div className="flex gap-6">
        {socials.map((social, index) => (
          <Link key={index} href={social.href}>
            {social.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
