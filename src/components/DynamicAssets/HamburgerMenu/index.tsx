import { FC, SVGProps } from "react";

const HamburgerMenu: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={48}
      height={48}
      rx={24}
      stroke="#0B7373"
      strokeWidth={2}
    />
    <path
      d="M12.965 15.962h24M13 25h24M12.965 33.962h24"
      stroke="#0B7373"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HamburgerMenu;
