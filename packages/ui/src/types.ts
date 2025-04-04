import { CSSProperties, ReactElement, ReactNode, Ref, RefAttributes } from "react";

export type ChildrenProps = { children?: ReactNode };

export type StyleProps = { className?: string; style?: CSSProperties };
export type StyleSlotsToStyleProps<T> = { classNames?: { [slot in keyof T]?: string }; styles?: { [slot in keyof T]?: CSSProperties } };
export type StyleSlotsToSlots<T> = { styleSlots: T } & StyleSlotsToStyleProps<T>;

export type Variants = "solid" | "soft" | "light" | "bordered" | "ghost" | "faded" | "card" | "gradient" | "animated" | "shadow";
export type VariantProps = { variant?: Variants };

export type Colors = "default" | "inverted" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
export type ColorProps = { color?: Colors };

export type Sizes = "sm" | "md" | "lg";
export type SizeProps = { size?: Sizes };
export type RadiusProps = { radius?: Sizes | "full" | "none" };

export type ContentProps = { startContent?: ReactNode; endContent?: ReactNode };

// Override forwardRef types so generics work.
declare function forwardRef<T, P = {}>(render: (props: P, ref: Ref<T>) => ReactElement | null): (props: P & RefAttributes<T>) => ReactElement | null;
export type ForwardRefType = typeof forwardRef;
