export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "default" | "filled";
  className?: string;
}
