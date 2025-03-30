"use client";

import { useGlobalProps } from "./provider";
import { radiusVariants, useVariantAndColorStyles } from "./styles";
import { ChildrenProps, ColorProps, SizeProps, StyleProps, StyleSlotsToSlots, StyleSlotsToStyleProps, VariantProps } from "./types";
import { createSlots } from "./utils";
import { Slot } from "@radix-ui/react-slot";
import React, { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { mergeProps } from "react-aria";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useCardStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    slots: {
      base: ["overflow-hidden border backdrop-blur-lg duration-300", radiusVariants.md],
      header: "",
      body: "",
      footer: "",
      title: "font-bold",
      description: "",
      buttons: "flex flex-wrap justify-end",
    },
    variants: {
      size: {
        sm: { header: "p-4", body: "p-4", footer: "p-4", title: "text-lg", description: "text-xs", buttons: "gap-4" },
        md: { header: "p-6", body: "p-6", footer: "p-6", title: "text-xl", description: "text-sm", buttons: "gap-6" },
        lg: { header: "p-8", body: "p-8", footer: "p-8", title: "text-2xl", description: "text-base", buttons: "gap-8" },
      },
    },
    defaultVariants: { variant: "card", color: "default" },
  });

type CardStylesReturnType = ReturnType<ReturnType<typeof useCardStyles>>;

// props

interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    ChildrenProps,
    VariantProps,
    ColorProps,
    SizeProps,
    StyleProps,
    StyleSlotsToStyleProps<CardStylesReturnType> {
  asChild?: boolean;
}

// slots

interface CardSlotsType extends StyleSlotsToSlots<CardStylesReturnType> {}

const [CardSlotsProvider, useCardSlots] = createSlots<CardSlotsType>();

// component

function _Card(props: CardProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Card", props, { size: "md", variant: "card", color: "default", asChild: false });

  const { size, variant, color, children, className, classNames, style, styles, asChild } = globalProps;

  const styleSlots = useCardStyles()({ size, variant, color });

  const Component = asChild ? Slot : "div";

  return (
    <CardSlotsProvider value={{ styleSlots, classNames, styles }}>
      <Component ref={ref} className={styleSlots.base({ className: twMerge(classNames?.base, className) })} style={mergeProps(styles?.base, style)}>
        {children}
      </Component>
    </CardSlotsProvider>
  );
}

const Card = forwardRef(_Card);

function _CardHeader(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <header
      ref={ref}
      className={styleSlots.header({ className: twMerge(classNames?.header, className) })}
      style={mergeProps(styles?.header, style)}
      {...restProps}
    />
  );
}

const CardHeader = forwardRef(_CardHeader);

function _CardBody(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <section
      ref={ref}
      className={styleSlots.body({ className: twMerge(classNames?.body, className) })}
      style={mergeProps(styles?.body, style)}
      {...restProps}
    />
  );
}

const CardBody = forwardRef(_CardBody);

function _CardFooter(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <footer
      ref={ref}
      className={styleSlots.footer({ className: twMerge(classNames?.footer, className) })}
      style={mergeProps(styles?.footer, style)}
      {...restProps}
    />
  );
}

const CardFooter = forwardRef(_CardFooter);

function _CardTitle(props: HTMLAttributes<HTMLHeadingElement>, ref: ForwardedRef<HTMLHeadingElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <h3
      ref={ref}
      className={styleSlots.title({ className: twMerge(classNames?.title, className) })}
      style={mergeProps(styles?.title, style)}
      {...restProps}
    />
  );
}

const CardTitle = forwardRef(_CardTitle);

function _CardDescription(props: HTMLAttributes<HTMLParagraphElement>, ref: ForwardedRef<HTMLParagraphElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <p
      ref={ref}
      className={styleSlots.description({ className: twMerge(classNames?.description, className) })}
      style={mergeProps(styles?.description, style)}
      {...restProps}
    />
  );
}

const CardDescription = forwardRef(_CardDescription);

function _CardButtons(props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) {
  const { styleSlots, className, classNames, style, styles, ...restProps } = useCardSlots(props);

  return (
    <div
      ref={ref}
      className={styleSlots.buttons({ className: twMerge(classNames?.buttons, className) })}
      style={mergeProps(styles?.buttons, style)}
      {...restProps}
    />
  );
}

const CardButtons = forwardRef(_CardButtons);

// exports

export { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription, CardButtons, useCardStyles };
