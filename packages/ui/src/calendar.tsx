"use client";

import { useCardStyles } from "./card";
import { Field, FieldBaseProps } from "./field";
import { useGlobalProps } from "./provider";
import { smallRadiusVariants, useHelperButtonStyles, useVariantAndColorStyles } from "./styles";
import { ColorProps, RadiusProps, StyleSlotsToStyleProps } from "./types";
import { FormValidationProps, useFormValidationState } from "@react-stately/form";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { mergeProps, useField } from "react-aria";
import {
  Button,
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarProps as AriaCalendarProps,
  composeRenderProps,
  DateValue,
  FieldErrorContext,
  Heading,
  Provider,
  TextContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useCalendarStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    base: "cursor-pointer transition-transform",
    slots: {
      wrapper: "",
      calendarWrapper: "text-default w-fit max-w-full overflow-auto p-4",
      header: "flex items-center justify-between gap-4",
      heading: "font-medium",
      button: useHelperButtonStyles()(),
      gridWrapper: "flex gap-4",
      grid: "size-fit border-separate border-spacing-x-0 border-spacing-y-1 [&_td]:p-0 [&_th]:p-0 [&_th]:font-light",
    },
    variants: {
      size: {
        sm: {
          base: "size-7 text-xs",
          heading: "text-sm",
          button: ["size-6 [&>svg]:size-3", smallRadiusVariants.sm],
          grid: "mt-3 [&_th]:size-7 [&_th]:text-xs",
        },
        md: {
          base: "size-8 text-sm",
          heading: "text-base",
          button: ["size-7 [&>svg]:size-4", smallRadiusVariants.md],
          grid: "mt-4 [&_th]:size-8 [&_th]:text-sm",
        },
        lg: {
          base: "size-9 text-base",
          heading: "text-lg",
          button: ["size-8 [&>svg]:size-5", smallRadiusVariants.lg],
          grid: "mt-5 [&_th]:size-9 [&_th]:text-base",
        },
      },
      radius: smallRadiusVariants,
      asCard: { true: { calendarWrapper: useCardStyles()().base() } },
      isUnavailable: { true: { base: "line-through" } },
      isOutsideMonth: { true: { base: "hidden" } },
      isSelectedRange: { true: "" },
      isSelectionStart: { true: "" },
      isSelectionEnd: { true: "" },
      isSelectedFirstDay: { true: "rounded-r-none!" },
      isSelectedLastDay: { true: "rounded-l-none!" },
    },
    compoundVariants: [
      { isSelectionStart: true, isSelectionEnd: false, className: "rounded-r-none!" },
      { isSelectionStart: false, isSelectionEnd: true, className: "rounded-l-none!" },
      { isSelectedRange: true, isSelectedFirstDay: false, isSelectedLastDay: false, className: "rounded-none!" },
    ],
  });

type CalendarStylesReturnType = ReturnType<ReturnType<typeof useCalendarStyles>>;

// props

interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration">,
    Omit<FormValidationProps<T | null | undefined>, "value" | "builtinValidation">,
    ColorProps,
    RadiusProps,
    FieldBaseProps,
    StyleSlotsToStyleProps<CalendarStylesReturnType> {
  visibleMonthCount?: number;
  asCard?: boolean;
}

// component

function _Calendar<T extends DateValue>(props: CalendarProps<T>, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Calendar", props, {
    color: "default",
    visibleMonthCount: 1,
    asCard: true,
    size: "md",
    radius: props.size || "md",
  });

  const { color, visibleMonthCount, asCard, value, size, radius, classNames, styles } = globalProps;

  const { displayValidation } = useFormValidationState({ ...globalProps, value });
  const { fieldProps, descriptionProps, errorMessageProps } = useField({ validationBehavior: "native", ...displayValidation, ...globalProps });

  const styleSlots = useCalendarStyles()({ asCard, size, radius });

  return (
    <Provider
      values={[
        [TextContext, { slots: { description: descriptionProps, errorMessage: errorMessageProps } }],
        [FieldErrorContext, displayValidation],
      ]}
    >
      <AriaCalendar
        ref={ref}
        {...mergeProps(globalProps, fieldProps)}
        aria-label={globalProps["aria-label"] ?? (typeof globalProps.label === "string" ? globalProps.label : undefined)}
        aria-describedby={globalProps["aria-describedby"] ?? (typeof globalProps.description === "string" ? globalProps.description : undefined)}
        visibleDuration={{ months: visibleMonthCount }}
        className={composeRenderProps(props.className, (className) => styleSlots.wrapper({ className: twMerge(classNames?.wrapper, className) }))}
        style={composeRenderProps(props.style, (style) => mergeProps(styles?.wrapper, style))}
      >
        <Field {...displayValidation} {...globalProps}>
          <CalendarWrapper styleSlots={styleSlots} classNames={classNames} styles={styles}>
            {Array.from({ length: visibleMonthCount }).map((_, index) => (
              <CalendarGrid key={index} offset={{ months: index }} className={styleSlots.grid({ className: classNames?.grid })} style={styles?.grid}>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={({ isHovered, isPressed, isDisabled, isFocusVisible, isSelected, isInvalid, isUnavailable, isOutsideMonth }) =>
                      styleSlots.base({
                        color: isUnavailable ? "error" : isSelected ? (isInvalid ? "error" : color) : "default",
                        variant: isSelected ? "solid" : "light",
                        isHovered,
                        isPressed,
                        isDisabled: isDisabled || isUnavailable,
                        isFocusVisible,
                        isUnavailable,
                        isOutsideMonth,
                        className: classNames?.base,
                      })
                    }
                    style={styles?.base}
                  />
                )}
              </CalendarGrid>
            ))}
          </CalendarWrapper>
        </Field>
      </AriaCalendar>
    </Provider>
  );
}

const Calendar = forwardRef(_Calendar);

function CalendarWrapper({
  styleSlots,
  classNames,
  styles,
  children,
}: {
  styleSlots: any;
  classNames: CalendarProps<DateValue>["classNames"];
  styles: CalendarProps<DateValue>["styles"];
  children: ReactNode;
}) {
  return (
    <div className={styleSlots.calendarWrapper({ className: classNames?.calendarWrapper })} style={styles?.calendarWrapper}>
      <div className="flex min-w-fit flex-col">
        <header className={styleSlots.header({ className: classNames?.header })} style={styles?.header}>
          <Button
            slot="previous"
            className={({ isHovered, isPressed, isDisabled, isFocusVisible }) =>
              styleSlots.button({ isHovered, isPressed, isDisabled, isFocusVisible, className: classNames?.button })
            }
            style={styles?.button}
          >
            <ChevronLeftIcon />
          </Button>

          <Heading className={styleSlots.heading({ className: classNames?.heading })} style={styles?.heading} />

          <Button
            slot="next"
            className={({ isHovered, isPressed, isDisabled, isFocusVisible }) =>
              styleSlots.button({ isHovered, isPressed, isDisabled, isFocusVisible, className: classNames?.button })
            }
            style={styles?.button}
          >
            <ChevronRightIcon />
          </Button>
        </header>

        <div className={styleSlots.gridWrapper({ className: classNames?.gridWrapper })} style={styles?.gridWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
}

// exports

export { Calendar, CalendarWrapper, useCalendarStyles };
