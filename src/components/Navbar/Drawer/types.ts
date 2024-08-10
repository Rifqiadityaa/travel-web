import { Dispatch, SetStateAction } from "react";

export interface DrawerProps extends NavbarProps {
  open: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
