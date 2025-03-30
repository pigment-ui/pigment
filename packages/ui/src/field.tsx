"use client";

import { useGlobalProps, useGlobalStyles } from "./provider";
import { radiusVariants, smallRadiusVariants, useHelperButtonStyles, useVariantAndColorStyles } from "./styles";
import { ChildrenProps, ColorProps, RadiusProps, SizeProps, StyleSlotsToStyleProps, VariantProps } from "./types";
import { useObjectRef } from "@react-aria/utils";
import { ValidationResult } from "@react-types/shared";
import React, { cloneElement, ForwardedRef, forwardRef, ReactElement, ReactNode } from "react";
import { mergeProps } from "react-aria";
import { FieldError, Group, Label, Text } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useFieldStyles = () =>
  tv({
    slots: {
      base: "text-default relative flex size-full",
      label: "cursor-default",
      description: "",
      errorMessage: "text-error",
      wrapperWithMessage: "flex flex-col",
    },
    variants: {
      size: {
        sm: { label: "pr-0.5 pb-0.5 text-xs", description: "pt-0.5 text-xs", errorMessage: "pt-0.5 text-xs" },
        md: { label: "pr-1 pb-1 text-sm", description: "pt-1 text-sm", errorMessage: "pt-1 text-sm" },
        lg: { label: "pr-1.5 pb-1.5 text-base", description: "pt-1.5 text-base", errorMessage: "pt-1.5 text-base" },
      },
      isHorizontal: {
        true: { base: "items-center", wrapperWithMessage: "flex-1" },
        false: "flex-col",
      },
      isInverted: {
        true: "text-inverted",
      },
    },
  });

type FieldStylesReturnType = ReturnType<ReturnType<typeof useFieldStyles>>;

export const useFieldSegmentStyles = () =>
  tv({
    base: useHelperButtonStyles()({ variant: "light", className: ["p-1", smallRadiusVariants.md] }),
    variants: { isPlaceholder: { true: "opacity-50 data-focused:opacity-100 data-focused:before:opacity-20" } },
  });

const useFieldInputStyles = (extend?: any) =>
  tv({
    extend: useVariantAndColorStyles(extend),
    base: "cursor-text",
    slots: {
      wrapper: "flex w-full flex-1 flex-col",
      self: "flex w-full flex-1 items-center bg-transparent outline-hidden placeholder:text-inherit placeholder:opacity-50 aria-[disabled]:pointer-events-none data-disabled:pointer-events-none",
      content: "pointer-events-none shrink-0",
      button: useHelperButtonStyles()({ className: "px-1.5" }),
    },
    variants: {
      size: {
        sm: { base: "gap-2 p-2 text-xs [&_svg]:size-4", button: "h-6 [&_svg]:size-3!" },
        md: { base: "gap-2.5 p-2.5 text-sm [&_svg]:size-5", button: "h-7 [&_svg]:size-4!" },
        lg: { base: "gap-3 p-3 text-base [&_svg]:size-6", button: "h-8 [&_svg]:size-5!" },
      },
      radius: {
        sm: { base: radiusVariants.sm, button: smallRadiusVariants.sm },
        md: { base: radiusVariants.md, button: smallRadiusVariants.md },
        lg: { base: radiusVariants.lg, button: smallRadiusVariants.lg },
        full: { base: radiusVariants.full, button: smallRadiusVariants.full },
        none: { base: radiusVariants.none, button: smallRadiusVariants.none },
      },
    },
  });

type FieldInputStylesReturnType = ReturnType<ReturnType<typeof useFieldInputStyles>>;

// props

interface FieldBaseProps extends SizeProps {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode | ((validationResult: ValidationResult) => ReactNode);
  isRequired?: boolean;
  isInvalid?: boolean;
  isHorizontal?: boolean;
  fieldClassNames?: StyleSlotsToStyleProps<FieldStylesReturnType>["classNames"];
  fieldStyles?: StyleSlotsToStyleProps<FieldStylesReturnType>["styles"];
}

interface FieldProps extends FieldBaseProps, ChildrenProps, ColorProps {}

interface FieldInputBaseProps extends VariantProps, ColorProps, SizeProps, RadiusProps, FieldBaseProps {
  isLabelInside?: boolean;
  startContent?: ReactElement<HTMLElement>;
  endContent?: ReactElement<HTMLElement>;
  fieldInputClassNames?: StyleSlotsToStyleProps<FieldInputStylesReturnType>["classNames"];
  fieldInputStyles?: StyleSlotsToStyleProps<FieldInputStylesReturnType>["styles"];
}

interface FieldInputProps extends FieldInputBaseProps {
  isFocusWithin?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  children?: ReactElement<HTMLElement>;
  startButton?: ReactElement<HTMLElement>;
  endButton?: ReactElement<HTMLElement>;
}

// component

function _Field(props: FieldProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Field", props, { size: "md" });

  const {
    label,
    description,
    errorMessage,
    isHorizontal = false,
    isRequired,
    size,
    color,
    children,
    fieldClassNames,
    fieldStyles: fieldStylesFromProps,
  } = globalProps;

  const styleSlots = useFieldStyles()({ size, isInverted: color === "inverted", isHorizontal });

  return (
    <div ref={ref} className={styleSlots.base({ className: fieldClassNames?.base })} style={fieldStylesFromProps?.base}>
      {label && (
        <Label className={styleSlots.label({ className: fieldClassNames?.label })} style={fieldStylesFromProps?.label}>
          {label}
          {isRequired && <span> *</span>}
        </Label>
      )}

      <div
        className={styleSlots.wrapperWithMessage({ className: fieldClassNames?.wrapperWithMessage })}
        style={fieldStylesFromProps?.wrapperWithMessage}
      >
        {children}

        {description && (
          <Text
            slot="description"
            className={styleSlots.description({ className: fieldClassNames?.description })}
            style={fieldStylesFromProps?.description}
          >
            {description}
          </Text>
        )}

        <FieldError className={styleSlots.errorMessage({ className: fieldClassNames?.errorMessage })} style={fieldStylesFromProps?.errorMessage}>
          {errorMessage}
        </FieldError>
      </div>
    </div>
  );
}

const Field = forwardRef(_Field);

function _FieldInput(props: FieldInputProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("FieldInput", props, {
    variant: "soft",
    color: "default",
    size: "md",
    radius: props.size || "md",
    isLabelInside: true,
    isHorizontal: false,
  });

  const {
    variant,
    color,
    size,
    radius,
    isInvalid,
    isDisabled,
    isLabelInside,
    isHorizontal,
    startContent,
    endContent,
    startButton,
    endButton,
    children,
    fieldInputClassNames,
    fieldInputStyles,
  } = globalProps;

  const globalStyles = useGlobalStyles();

  const styleSlots = useFieldInputStyles(globalStyles)({ variant, color: isInvalid ? "error" : color, size, radius });

  // @ts-ignore
  const selfRef = useObjectRef<HTMLElement>(children?.ref);

  return (
    <Field {...globalProps} label={isLabelInside ? "" : globalProps.label}>
      <Group
        ref={ref}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        className={({ isHovered, isDisabled, isFocusVisible, isFocusWithin }) =>
          styleSlots.base({
            isHovered: isHovered || isFocusWithin,
            isFocusWithin,
            isDisabled,
            isFocusVisible,
            className: fieldInputClassNames?.base,
          })
        }
        style={fieldInputStyles?.base}
        onClick={() => {
          selfRef.current?.focus();
          selfRef.current?.click();
        }}
      >
        {startButton &&
          cloneElement(startButton, {
            className: styleSlots.button({ className: twMerge(startButton.props?.className, fieldInputClassNames?.button) }),
            style: mergeProps(startButton.props?.style, fieldInputStyles?.button),
          })}

        {startContent &&
          cloneElement(startContent, {
            className: styleSlots.content({ className: twMerge("mr-0", startContent.props?.className, fieldInputClassNames?.content) }),
            style: mergeProps(startContent.props?.style, fieldInputStyles?.content),
          })}

        <div className={styleSlots.wrapper({ className: fieldInputClassNames?.wrapper })} style={fieldInputStyles?.wrapper}>
          {isLabelInside && globalProps.label && (
            <Label
              className={useFieldStyles()({ size, isHorizontal }).label({
                className: twMerge("pointer-events-none text-inherit", globalProps.fieldClassNames?.label),
              })}
              style={globalProps.fieldStyles?.label}
            >
              {globalProps.label}
              {globalProps.isRequired && <span> *</span>}
            </Label>
          )}
          {children &&
            cloneElement(children, {
              // @ts-ignore
              ref: selfRef,
              className: styleSlots.self({ className: twMerge(children.props?.className, fieldInputClassNames?.self) }),
              style: mergeProps(children.props?.style, fieldInputStyles?.self),
            })}
        </div>

        {endContent &&
          cloneElement(endContent, {
            className: styleSlots.content({ className: twMerge("ml-0", endContent.props?.className, fieldInputClassNames?.content) }),
            style: mergeProps(endContent.props?.style, fieldInputStyles?.content),
          })}

        {endButton &&
          cloneElement(endButton, {
            className: styleSlots.button({ className: twMerge(endButton.props?.className, fieldInputClassNames?.button) }),
            style: mergeProps(endButton.props?.style, fieldInputStyles?.button),
          })}
      </Group>
    </Field>
  );
}

const FieldInput = forwardRef(_FieldInput);

// exports

export { Field, FieldInput, useFieldStyles, useFieldInputStyles };
export type { FieldBaseProps, FieldInputBaseProps };
