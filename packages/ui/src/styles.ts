import { tv } from "tailwind-variants";

export const isDisabledVariants = { true: "opacity-50 cursor-not-allowed" } as const;

export const isFocusVisibleVariants = { true: "outline-2 outline-offset-2 outline-focus" } as const;

export const radiusVariants = { sm: "rounded-lg", md: "rounded-xl", lg: "rounded-2xl", full: "rounded-full", none: "rounded-none" } as const;

export const smallRadiusVariants = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl", full: "rounded-full", none: "rounded-none" } as const;

export const useVariantAndColorStyles = () => {
  // const { extendVariantAndColorStyles = {} } = useGlobalSlots();

  return tv({
    // extend: extendVariantAndColorStyles,
    base: "relative flex items-center justify-center overflow-hidden border duration-300 outline-none",
    variants: {
      variant: {
        solid: "",
        soft: "",
        light: "",
        bordered: "",
        ghost: "",
        faded: "",
        card: "",
      },
      color: {
        default: "",
        inverted: "",
        primary: "",
        secondary: "",
        info: "",
        success: "",
        warning: "",
        error: "",
      },
      isHovered: { true: "" },
      isPressed: { true: "scale-95" },
      isFocusWithin: { true: "ring-1" },
      isDisabled: isDisabledVariants,
      isFocusVisible: isFocusVisibleVariants,
    },
    compoundVariants: [
      { color: "inverted", isFocusVisible: true, className: "outline-inverted" },

      { color: "default", isFocusWithin: true, className: { base: "ring-default" } },
      { color: "inverted", isFocusWithin: true, className: { base: "ring-inverted" } },
      { color: "primary", isFocusWithin: true, className: { base: "ring-primary" } },
      { color: "secondary", isFocusWithin: true, className: { base: "ring-secondary" } },
      { color: "info", isFocusWithin: true, className: { base: "ring-info" } },
      { color: "success", isFocusWithin: true, className: { base: "ring-success" } },
      { color: "warning", isFocusWithin: true, className: { base: "ring-warning" } },
      { color: "error", isFocusWithin: true, className: { base: "ring-error" } },

      { variant: "solid", className: "border-transparent" },
      { variant: "solid", isHovered: true, className: "bg-opacity-90" },
      { variant: "solid", color: "default", className: "bg-default text-default-foreground" },
      { variant: "solid", color: "inverted", className: "bg-inverted text-inverted-foreground" },
      { variant: "solid", color: "primary", className: "bg-primary text-primary-foreground" },
      { variant: "solid", color: "secondary", className: "bg-secondary text-secondary-foreground" },
      { variant: "solid", color: "info", className: "bg-info text-info-foreground" },
      { variant: "solid", color: "success", className: "bg-success text-success-foreground" },
      { variant: "solid", color: "warning", className: "bg-warning text-warning-foreground" },
      { variant: "solid", color: "error", className: "bg-error text-error-foreground" },

      { variant: "soft", className: "bg-opacity-10 border-transparent" },
      { variant: "soft", isHovered: true, className: "bg-opacity-20" },
      { variant: "soft", color: "default", className: "bg-default text-default" },
      { variant: "soft", color: "inverted", className: "bg-inverted text-inverted" },
      { variant: "soft", color: "primary", className: "bg-primary text-primary" },
      { variant: "soft", color: "secondary", className: "bg-secondary text-secondary" },
      { variant: "soft", color: "info", className: "bg-info text-info" },
      { variant: "soft", color: "success", className: "bg-success text-success" },
      { variant: "soft", color: "warning", className: "bg-warning text-warning" },
      { variant: "soft", color: "error", className: "bg-error text-error" },

      { variant: "light", className: "bg-opacity-0 border-transparent" },
      { variant: "light", isHovered: true, className: "bg-opacity-10" },
      { variant: "light", color: "default", className: "bg-default text-default" },
      { variant: "light", color: "inverted", className: "bg-inverted text-inverted" },
      { variant: "light", color: "primary", className: "bg-primary text-primary" },
      { variant: "light", color: "secondary", className: "bg-secondary text-secondary" },
      { variant: "light", color: "info", className: "bg-info text-info" },
      { variant: "light", color: "success", className: "bg-success text-success" },
      { variant: "light", color: "warning", className: "bg-warning text-warning" },
      { variant: "light", color: "error", className: "bg-error text-error" },

      { variant: "bordered", className: "border-opacity-50 bg-opacity-0" },
      { variant: "bordered", isHovered: true, className: "bg-opacity-10" },
      { variant: "bordered", color: "default", className: "border-default bg-default text-default" },
      { variant: "bordered", color: "inverted", className: "border-inverted bg-inverted text-inverted" },
      { variant: "bordered", color: "primary", className: "border-primary bg-primary text-primary" },
      { variant: "bordered", color: "secondary", className: "border-secondary bg-secondary text-secondary" },
      { variant: "bordered", color: "info", className: "border-info bg-info text-info" },
      { variant: "bordered", color: "success", className: "border-success bg-success text-success" },
      { variant: "bordered", color: "warning", className: "border-warning bg-warning text-warning" },
      { variant: "bordered", color: "error", className: "border-error bg-error text-error" },

      { variant: "ghost", className: "border-opacity-50 bg-opacity-0" },
      { variant: "ghost", isHovered: true, className: "bg-opacity-100 border-transparent" },
      { variant: "ghost", color: "default", className: "border-default bg-default text-default" },
      { variant: "ghost", color: "default", isHovered: true, className: "text-default-foreground" },
      { variant: "ghost", color: "inverted", className: "border-inverted bg-inverted text-inverted" },
      { variant: "ghost", color: "inverted", isHovered: true, className: "text-inverted-foreground" },
      { variant: "ghost", color: "primary", className: "border-primary bg-primary text-primary" },
      { variant: "ghost", color: "primary", isHovered: true, className: "text-primary-foreground" },
      { variant: "ghost", color: "secondary", className: "border-secondary bg-secondary text-secondary" },
      { variant: "ghost", color: "secondary", isHovered: true, className: "text-secondary-foreground" },
      { variant: "ghost", color: "info", className: "border-info bg-info text-info" },
      { variant: "ghost", color: "info", isHovered: true, className: "text-info-foreground" },
      { variant: "ghost", color: "success", className: "border-success bg-success text-success" },
      { variant: "ghost", color: "success", isHovered: true, className: "text-success-foreground" },
      { variant: "ghost", color: "warning", className: "border-warning bg-warning text-warning" },
      { variant: "ghost", color: "warning", isHovered: true, className: "text-warning-foreground" },
      { variant: "ghost", color: "error", className: "border-error bg-error text-error" },
      { variant: "ghost", color: "error", isHovered: true, className: "text-error-foreground" },

      { variant: "faded", className: "border-opacity-50 bg-opacity-10" },
      { variant: "faded", isHovered: true, className: "bg-opacity-20" },
      { variant: "faded", color: "default", className: "border-default bg-default text-default" },
      { variant: "faded", color: "inverted", className: "border-inverted bg-inverted text-inverted" },
      { variant: "faded", color: "primary", className: "border-primary bg-primary text-primary" },
      { variant: "faded", color: "secondary", className: "border-secondary bg-secondary text-secondary" },
      { variant: "faded", color: "info", className: "border-info bg-info text-info" },
      { variant: "faded", color: "success", className: "border-success bg-success text-success" },
      { variant: "faded", color: "warning", className: "border-warning bg-warning text-warning" },
      { variant: "faded", color: "error", className: "border-error bg-error text-error" },

      { variant: "card", className: "border-default-1000/20 bg-default-0" },
      { variant: "card", isHovered: true, className: "bg-default-100" },
      { variant: "card", color: "default", className: "text-default" },
      { variant: "card", color: "inverted", className: "text-inverted border-default-0/20 bg-default-1000" },
      { variant: "card", color: "inverted", isHovered: true, className: "bg-default-900" },
      { variant: "card", color: "primary", className: "text-primary" },
      { variant: "card", color: "secondary", className: "text-secondary" },
      { variant: "card", color: "info", className: "text-info" },
      { variant: "card", color: "success", className: "text-success" },
      { variant: "card", color: "warning", className: "text-warning" },
      { variant: "card", color: "error", className: "text-error" },
    ],
  });
};

export const useHelperButtonStyles = () =>
  tv({
    base: [
      "relative flex min-w-max items-center justify-center overflow-hidden whitespace-nowrap duration-300 outline-none",
      "before:absolute before:inset-0 before:-z-10 before:bg-current before:duration-300 data-[pressed]:scale-90",
      "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focus-visible]:outline-offset-0 data-[focus-visible]:outline-current",
    ],
    variants: {
      variant: {
        soft: "before:opacity-10 data-[hovered]:before:opacity-20",
        light: "before:opacity-0 data-[hovered]:before:opacity-10",
      },
    },
    defaultVariants: { variant: "soft" },
  });
