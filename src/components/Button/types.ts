export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "default" | "filled" | "icon";
  className?: string;
}
