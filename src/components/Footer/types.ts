import { ReactElement } from "react";

export interface FooterProps {
  copyrightText: string;
  socials: {
    icon: ReactElement;
    href: string;
  }[];
}
