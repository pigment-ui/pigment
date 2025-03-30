"use client";

import { useGlobalProps, useGlobalStyles } from "./provider";
import { Spinner } from "./spinner";
import { radiusVariants, useVariantAndColorStyles } from "./styles";
import { ColorProps, ContentProps, RadiusProps, SizeProps, StyleProps, VariantProps } from "./types";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useObjectRef } from "@react-aria/utils";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { AriaButtonProps, HoverProps, mergeProps, useButton, useFocusRing, useHover } from "react-aria";
import { tv } from "tailwind-variants";

// styles

const useButtonStyles = (extend?: any) =>
  tv({
    extend: useVariantAndColorStyles(extend),
    base: "min-w-max cursor-pointer whitespace-nowrap",
    variants: {
      size: {
        sm: "h-8 gap-x-2 px-4 text-xs [&_svg]:size-4",
        md: "h-10 gap-x-2.5 px-5 text-sm [&_svg]:size-5",
        lg: "h-12 gap-x-3 px-6 text-base [&_svg]:size-6",
      },
      isCompact: { true: "" },
      isLoading: { true: "[&>*:not(:first-child)]:text-transparent!" },
      radius: radiusVariants,
    },
    compoundVariants: [
      { size: "sm", isCompact: true, className: "px-2" },
      { size: "md", isCompact: true, className: "px-2.5" },
      { size: "lg", isCompact: true, className: "px-3" },
    ],
  });

// props

interface ButtonProps extends AriaButtonProps, HoverProps, VariantProps, ColorProps, SizeProps, RadiusProps, ContentProps, StyleProps {
  isCompact?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
  spinnerPlacement?: "start" | "end" | "center";
  spinner?: ReactNode;
}

// component

function _Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  const globalProps = useGlobalProps("Button", props, { variant: "solid", color: "default", size: "md", radius: props.size || "md" });

  const {
    variant,
    color,
    size,
    radius,
    startContent,
    endContent,
    isLoading,
    isDisabled: disabled,
    isCompact,
    spinnerPlacement = "center",
    spinner = <Spinner />,
    asChild,
    children,
    className,
    style,
    ...restProps
  } = globalProps;

  const globalStyles = useGlobalStyles();

  const isDisabled = disabled || isLoading;

  const objRef = useObjectRef(ref);
  const { buttonProps, isPressed } = useButton({ ...restProps, isDisabled }, objRef);
  const { hoverProps, isHovered } = useHover({ ...restProps, isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  const Component = asChild ? Slot : "button";

  return (
    <Component
      ref={objRef}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      data-disabled={isDisabled || undefined}
      data-focus-visible={isFocusVisible || undefined}
      className={useButtonStyles(globalStyles)({
        variant,
        color,
        size,
        radius,
        isCompact,
        isLoading: isLoading && spinnerPlacement === "center",
        isHovered,
        isPressed,
        isDisabled,
        isFocusVisible,
        className,
      })}
      style={style}
    >
      {isLoading && spinnerPlacement === "center" && (
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2">{spinner}</div>
      )}

      {isLoading && spinnerPlacement === "start" && spinner}
      {startContent}
      {children && <Slottable>{children}</Slottable>}
      {endContent}
      {isLoading && spinnerPlacement === "end" && spinner}
    </Component>
  );
}

const Button = forwardRef(_Button);

// exports

export { Button };
