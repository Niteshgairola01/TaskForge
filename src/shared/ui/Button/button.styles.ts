import type { ButtonSize, ButtonVariant } from "./button.types";

export const baseStyles =
  "btn inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

export const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};

export const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-3",
};
