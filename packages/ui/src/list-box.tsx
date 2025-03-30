"use client";

import { useCardStyles } from "./card";
import { useGlobalProps, useGlobalStyles } from "./provider";
import { isFocusVisibleVariants, smallRadiusVariants, useVariantAndColorStyles } from "./styles";
import { ColorProps, ContentProps, ForwardRefType, SizeProps, StyleSlotsToStyleProps, VariantProps } from "./types";
import { createSlots } from "./utils";
import { FormValidationProps } from "@react-stately/form";
import { CheckIcon } from "lucide-react";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { Key, mergeProps } from "react-aria";
import {
  Collection,
  composeRenderProps,
  Header,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  ListBoxSection as AriaListBoxSection,
  ListBoxSectionProps as AriaListBoxSectionProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useListBoxStyles = () =>
  tv({
    variants: {
      asCard: { true: useCardStyles()().base({ className: "p-2" }) },
      isFocusVisible: isFocusVisibleVariants,
    },
  });

const useListBoxItemStyles = (extend?: any) =>
  tv({
    extend: useVariantAndColorStyles(extend),
    base: "scale-100!",
    slots: {
      content: "flex-1",
      icon: "transition-transform duration-300",
    },
    variants: {
      size: {
        sm: { base: ["mt-0.5 gap-x-1 p-1 text-xs [&_svg]:size-3", smallRadiusVariants.sm] },
        md: { base: ["mt-1 gap-x-2 p-2 text-sm [&_svg]:size-4", smallRadiusVariants.md] },
        lg: { base: ["mt-1.5 gap-x-3 p-3 text-base [&_svg]:size-5", smallRadiusVariants.lg] },
      },
      isSelectable: {
        true: "cursor-pointer",
        false: "cursor-default",
      },
      isSelected: {
        false: { icon: "scale-0" },
      },
    },
  });

type ListBoxItemStylesReturnType = ReturnType<ReturnType<typeof useListBoxItemStyles>>;

const useListBoxSectionStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    slots: {
      base: "first:pt-0 last:pb-0",
      title: "font-bold",
    },
    variants: {
      size: {
        sm: { base: "py-1", title: "mb-1 p-1 text-xs" },
        md: { base: "py-2", title: "mb-2 p-2 text-sm" },
        lg: { base: "py-3", title: "mb-3 p-3 text-base" },
      },
    },
    defaultVariants: { variant: "light" },
  });

type ListBoxSectionStylesReturnType = ReturnType<ReturnType<typeof useListBoxSectionStyles>>;

// props

interface ListBoxProps<T extends object>
  extends AriaListBoxProps<T>,
    Omit<FormValidationProps<"all" | Iterable<Key> | undefined>, "value" | "builtinValidation">,
    VariantProps,
    ColorProps,
    SizeProps {
  asCard?: boolean;
  icon?: ReactNode;
  itemClassNames?: ListBoxItemProps["classNames"];
  itemStyles?: ListBoxItemProps["styles"];
  sectionClassNames?: ListBoxSectionProps<T>["classNames"];
  sectionStyles?: ListBoxSectionProps<T>["styles"];
}

interface ListBoxItemProps extends AriaListBoxItemProps, VariantProps, ColorProps, ContentProps, StyleSlotsToStyleProps<ListBoxItemStylesReturnType> {
  icon?: ReactNode;
}

interface ListBoxSectionProps<T extends object> extends AriaListBoxSectionProps<T>, StyleSlotsToStyleProps<ListBoxSectionStylesReturnType> {
  title: string;
}

// slots

interface ListBoxSlotsType<T extends object>
  extends Pick<
    ListBoxProps<T>,
    "variant" | "color" | "size" | "itemClassNames" | "itemStyles" | "sectionClassNames" | "sectionStyles" | "items" | "children"
  > {}

const [ListBoxSlotsProvider, useListBoxSlots] = createSlots<ListBoxSlotsType<object>>();

// component

function _ListBox<T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("ListBox", props, { asCard: true, variant: "soft", color: "default", size: "md" });

  const { asCard, variant, color, size, itemClassNames, itemStyles, sectionClassNames, sectionStyles } = globalProps;

  return (
    <ListBoxSlotsProvider value={{ variant, color, size, itemClassNames, itemStyles, sectionClassNames, sectionStyles }}>
      <AriaListBox
        ref={ref}
        {...globalProps}
        className={composeRenderProps(globalProps.className, (className, { isFocusVisible }) =>
          useListBoxStyles()({ asCard, isFocusVisible, className }),
        )}
      />
    </ListBoxSlotsProvider>
  );
}

const ListBox = (forwardRef as ForwardRefType)(_ListBox);

function _ListBoxItem(props: ListBoxItemProps, ref: ForwardedRef<HTMLDivElement>) {
  const { variant, color, size, startContent, endContent, icon, classNames, itemClassNames, styles, itemStyles } = useListBoxSlots(props);
  const globalStyles = useGlobalStyles();

  const styleSlots = useListBoxItemStyles(globalStyles)({ color, size });

  return (
    <AriaListBoxItem
      ref={ref}
      id={typeof props.children === "string" ? props.children : undefined}
      textValue={typeof props.children === "string" ? props.children : undefined}
      {...props}
      className={composeRenderProps(props.className, (className, { isHovered, isPressed, isDisabled, isFocusVisible, selectionMode, isSelected }) =>
        styleSlots.base({
          variant: isSelected ? variant : "light",
          isHovered,
          isPressed,
          isDisabled,
          isFocusVisible,
          isSelectable: selectionMode !== "none",
          className: twMerge(itemClassNames?.base, classNames?.base, className),
        }),
      )}
      style={composeRenderProps(props.style, (style) => mergeProps(itemStyles?.base, styles?.base, style))}
    >
      {composeRenderProps(props.children, (children, { isSelected, selectionMode }) => (
        <>
          {startContent}
          <div
            className={styleSlots.content({ className: twMerge(itemClassNames?.content, classNames?.content) })}
            style={mergeProps(itemStyles?.content, styles?.content)}
          >
            {children}
          </div>
          {selectionMode !== "none" && (
            <div
              className={styleSlots.icon({ isSelected, className: twMerge(itemClassNames?.icon, classNames?.icon) })}
              style={mergeProps(itemStyles?.icon, styles?.icon)}
            >
              {icon ?? <CheckIcon />}
            </div>
          )}
          {endContent}
        </>
      ))}
    </AriaListBoxItem>
  );
}

const ListBoxItem = forwardRef(_ListBoxItem);

function _ListBoxSection<T extends object>(props: ListBoxSectionProps<T>, ref: ForwardedRef<HTMLDivElement>) {
  const { title, items, color, size, className, classNames, sectionClassNames, style, styles, sectionStyles, children } = useListBoxSlots(props);

  const styleSlots = useListBoxSectionStyles()({ color, size });

  return (
    <AriaListBoxSection
      ref={ref}
      className={styleSlots.base({ className: twMerge(sectionClassNames?.base, classNames?.base, className) })}
      style={mergeProps(sectionStyles?.base, styles?.base, style)}
    >
      <Header
        className={styleSlots.title({ className: twMerge(sectionClassNames?.title, classNames?.title) })}
        style={mergeProps(sectionStyles?.title, styles?.title)}
      >
        {title}
      </Header>
      <Collection items={items}>{children}</Collection>
    </AriaListBoxSection>
  );
}

const ListBoxSection = (forwardRef as ForwardRefType)(_ListBoxSection);

// exports

export { ListBox, ListBoxItem, ListBoxSection, useListBoxItemStyles, useListBoxSectionStyles };
export type { ListBoxItemProps, ListBoxSectionProps, ListBoxSlotsType };

export const filterInlineListBoxProps = (props: any) => {
  const filteredProps: { [key: string]: any } = {
    "aria-label": props["aria-label"] || props.label,
    asCard: false,
    children: props.children,
    items: props.items,
    variant: props.variant,
    color: props.isInvalid ? "error" : props.color,
    size: props.size,
    itemStartContent: props.itemStartContent,
    itemEndContent: props.itemEndContent,
    itemClassNames: props.itemClassNames,
    itemStyles: props.itemStyles,
    sectionClassNames: props.sectionClassNames,
    sectionStyles: props.sectionStyles,
  };

  // Remove undefined keys
  return Object.keys(filteredProps).reduce(
    (acc, key) => {
      if (filteredProps[key] !== undefined) {
        acc[key] = filteredProps[key];
      }
      return acc;
    },
    {} as Record<string, any>,
  );
};
