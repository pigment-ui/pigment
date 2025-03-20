import { tv } from "tailwind-variants";

export const isDisabledVariants = { true: "opacity-50 cursor-not-allowed" } as const;

export const isFocusVisibleVariants = { true: "outline-2 outline-offset-2 outline-focus" } as const;

export const radiusVariants = { sm: "rounded-lg", md: "rounded-xl", lg: "rounded-2xl", full: "rounded-full", none: "rounded-none" } as const;

export const smallRadiusVariants = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl", full: "rounded-full", none: "rounded-none" } as const;

export const useVariantAndColorStyles = () => {
  // const { extendVariantAndColorStyles = {} } = useGlobalSlots();

  return tv({
    // extend: extendVariantAndColorStyles,
    base: "relative z-0 flex items-center justify-center overflow-hidden border bg-clip-padding duration-300 outline-none",
    variants: {
      variant: {
        solid: "",
        soft: "",
        light: "",
        bordered: "",
        ghost: "",
        faded: "",
        card: "",
        gradient: "",
        animated: "",
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

      { variant: "gradient", className: "border-transparent bg-gradient-to-b [background-size:200%_200%;]" },
      { variant: "gradient", isHovered: true, className: "[background-position:100%_100%;]" },
      { variant: "gradient", color: "default", className: "from-default via-default/50 to-default text-default-foreground" },
      { variant: "gradient", color: "inverted", className: "from-inverted via-inverted/50 to-inverted text-inverted-foreground" },
      { variant: "gradient", color: "primary", className: "from-primary via-primary/50 to-primary text-primary-foreground" },
      { variant: "gradient", color: "secondary", className: "from-secondary via-secondary/50 to-secondary text-secondary-foreground" },
      { variant: "gradient", color: "info", className: "from-info via-info/50 to-info text-info-foreground" },
      { variant: "gradient", color: "success", className: "from-success via-success/50 to-success text-success-foreground" },
      { variant: "gradient", color: "warning", className: "from-warning via-warning/50 to-warning text-warning-foreground" },
      { variant: "gradient", color: "error", className: "from-error via-error/50 to-error text-error-foreground" },

      {
        variant: "animated",
        className:
          "border-transparent before:absolute before:inset-x-0 before:-z-10 before:aspect-square before:scale-2 before:animate-spin before:bg-gradient-to-b before:duration-300 before:[animation-duration:5s;]",
      },
      { variant: "animated", isHovered: true, className: "beofre:opacity-0" },
      { variant: "animated", color: "default", className: "before:from-default/20 before:to-default/40 text-default" },
      { variant: "animated", color: "default", isHovered: true, className: "bg-default text-default-foreground" },
      { variant: "animated", color: "inverted", className: "before:from-inverted/20 before:to-inverted/40 text-inverted" },
      { variant: "animated", color: "inverted", isHovered: true, className: "bg-inverted text-inverted-foreground" },
      { variant: "animated", color: "primary", className: "before:from-primary/20 before:to-primary/40 text-primary" },
      { variant: "animated", color: "primary", isHovered: true, className: "bg-primary text-primary-foreground" },
      { variant: "animated", color: "secondary", className: "before:from-secondary/20 before:to-secondary/40 text-secondary" },
      { variant: "animated", color: "secondary", isHovered: true, className: "bg-secondary text-secondary-foreground" },
      { variant: "animated", color: "info", className: "before:from-info/20 before:to-info/40 text-info" },
      { variant: "animated", color: "info", isHovered: true, className: "bg-info text-info-foreground" },
      { variant: "animated", color: "success", className: "before:from-success/20 before:to-success/40 text-success" },
      { variant: "animated", color: "success", isHovered: true, className: "bg-success text-success-foreground" },
      { variant: "animated", color: "warning", className: "before:from-warning/20 before:to-warning/40 text-warning" },
      { variant: "animated", color: "warning", isHovered: true, className: "bg-warning text-warning-foreground" },
      { variant: "animated", color: "error", className: "before:from-error/20 before:to-error/40 text-error" },
      { variant: "animated", color: "error", isHovered: true, className: "bg-error text-error-foreground" },
    ],
  });
};

export const useHelperButtonStyles = () =>
  tv({
    base: [
      "relative z-10 flex min-w-max items-center justify-center overflow-hidden whitespace-nowrap transition-transform duration-300 outline-none",
      "before:absolute before:inset-0 before:-z-10 before:bg-current data-[pressed]:scale-90",
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
