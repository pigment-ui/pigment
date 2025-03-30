"use client";

import { useGlobalProps } from "./provider";
import { useVariantAndColorStyles } from "./styles";
import { ColorProps, SizeProps, StyleSlotsToStyleProps } from "./types";
import React, { ForwardedRef, forwardRef } from "react";
import { mergeProps } from "react-aria";
import { composeRenderProps, Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useSwitchStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    slots: {
      base: "relative flex items-center rounded-full outline-hidden transition duration-300",
      wrapper: "flex cursor-pointer items-center",
      thumb: "absolute left-1 rounded-full bg-current duration-300",
      content: "text-default",
    },
    variants: {
      size: {
        sm: { wrapper: "gap-x-2", base: "h-6 w-10", thumb: "size-4", content: "text-sm" },
        md: { wrapper: "gap-x-2.5", base: "h-8 w-16", thumb: "size-6", content: "text-base" },
        lg: { wrapper: "gap-x-3", base: "h-10 w-20", thumb: "size-8", content: "text-lg" },
      },
      isSelected: { true: "" },
      isHovered: { true: "" },
    },
    compoundVariants: [
      { color: "inverted", className: { content: "text-inverted" } },

      { isSelected: false, isHovered: false, className: { base: "bg-default/40" } },
      { isSelected: false, isHovered: true, className: { base: "bg-default/50" } },

      { isSelected: true, size: "sm", className: { thumb: "translate-x-4" } },
      { isSelected: true, size: "md", className: { thumb: "translate-x-8" } },
      { isSelected: true, size: "lg", className: { thumb: "translate-x-10" } },
      { isSelected: true, isPressed: true, size: "sm", className: { thumb: "translate-x-3" } },
      { isSelected: true, isPressed: true, size: "md", className: { thumb: "translate-x-7" } },
      { isSelected: true, isPressed: true, size: "lg", className: { thumb: "translate-x-9" } },
      { isPressed: true, size: "sm", className: { thumb: "w-5" } },
      { isPressed: true, size: "md", className: { thumb: "w-7" } },
      { isPressed: true, size: "lg", className: { thumb: "w-9" } },
    ],
  });

type SwitchStylesReturnType = ReturnType<ReturnType<typeof useSwitchStyles>>;

// props

interface SwitchProps extends AriaSwitchProps, ColorProps, SizeProps, StyleSlotsToStyleProps<SwitchStylesReturnType> {}

// component

function _Switch(props: SwitchProps, ref: ForwardedRef<HTMLLabelElement>) {
  const globalProps = useGlobalProps("Switch", props, { color: "default", size: "md" });

  const { color, size, classNames, styles } = globalProps;

  const styleSlots = useSwitchStyles()({ color, size, variant: "solid" });

  return (
    <AriaSwitch
      ref={ref}
      {...globalProps}
      className={composeRenderProps(globalProps.className, (className, { isDisabled }) =>
        styleSlots.wrapper({ isDisabled, className: twMerge(classNames?.wrapper, className) }),
      )}
      style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.wrapper, style))}
    >
      {composeRenderProps(globalProps.children, (children, { isHovered, isPressed, isSelected, isFocusVisible }) => (
        <>
          <div
            className={styleSlots.base({
              color: isSelected ? color : color === "inverted" ? "inverted" : "default",
              isHovered,
              isPressed,
              isSelected,
              isFocusVisible,
              className: classNames?.base,
            })}
            style={styles?.base}
          >
            <div className={styleSlots.thumb({ isSelected, isPressed, className: classNames?.thumb })} style={styles?.thumb} />
          </div>
          <div className={styleSlots.content({ className: classNames?.content })} style={styles?.content}>
            {children}
          </div>
        </>
      ))}
    </AriaSwitch>
  );
}

const Switch = forwardRef(_Switch);

// exports

export { Switch };
