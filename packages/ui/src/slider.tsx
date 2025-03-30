"use client";

import { Field, FieldBaseProps } from "./field";
import { useGlobalProps } from "./provider";
import { isDisabledVariants, isFocusVisibleVariants, smallRadiusVariants, useVariantAndColorStyles } from "./styles";
import { ColorProps, ContentProps, RadiusProps, SizeProps, StyleSlotsToStyleProps } from "./types";
import { FormValidationProps, useFormValidationState } from "@react-stately/form";
import React, { ForwardedRef, forwardRef } from "react";
import { mergeProps, useField } from "react-aria";
import {
  composeRenderProps,
  FieldErrorContext,
  Provider,
  Slider as AriaSlider,
  SliderOutput,
  SliderProps as AriaSliderProps,
  SliderThumb,
  SliderTrack,
  TextContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useSliderStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    slots: {
      base: "relative flex-1",
      wrapper: "",
      output: "absolute top-0 right-0",
      sliderWrapper: "relative size-full",
      contentWrapper: "flex items-center",
      track: [
        "relative cursor-pointer duration-300",
        "before:absolute before:inset-0 before:[border-radius:inherit;] before:bg-current before:opacity-10",
      ],
      thumbWrapper: "absolute",
      thumb: [
        "relative z-30 outline-hidden [transition:width_300ms,height_300ms,border-color_300ms;]",
        "before:absolute before:inset-0 before:-z-10 before:[border-radius:inherit;] before:bg-current",
      ],
      filler: [
        "absolute z-10 [transition:background-color_300ms;]",
        "before:absolute before:inset-0 before:-z-10 before:[border-radius:inherit;] before:bg-current",
      ],
      stepsWrapper: "pointer-events-none absolute flex items-center justify-between",
      step: "bg-inverted z-20 size-0.5 rounded-full opacity-50",
      marksWrapper: "text-default absolute",
      mark: "absolute",
    },
    variants: {
      orientation: {
        horizontal: {
          wrapper: "w-full",
          track: "w-full",
          thumbWrapper: "inset-y-0",
          thumb: "top-1/2",
          filler: "inset-y-0",
          contentWrapper: "w-full flex-row",
          stepsWrapper: "inset-y-0 flex-row",
          marksWrapper: "top-full",
          mark: "-translate-x-1/2",
        },
        vertical: {
          wrapper: "h-full",
          track: "h-full",
          thumbWrapper: "inset-x-0",
          thumb: "left-1/2 -translate-x-1/2",
          filler: "inset-x-0",
          contentWrapper: "h-full flex-col",
          stepsWrapper: "inset-x-0 flex-col",
          marksWrapper: "left-full",
          mark: "translate-y-1/2",
        },
      },
      size: {
        sm: { wrapper: "text-xs", contentWrapper: "gap-2 [&_svg]:size-4", thumb: "size-4" },
        md: { wrapper: "text-sm", contentWrapper: "gap-2.5 [&_svg]:size-5", thumb: "size-5" },
        lg: { wrapper: "text-base", contentWrapper: "gap-3 [&_svg]:size-6", thumb: "size-6" },
      },
      radius: {
        sm: { track: smallRadiusVariants.sm, thumb: smallRadiusVariants.sm, filler: smallRadiusVariants.sm },
        md: { track: smallRadiusVariants.md, thumb: smallRadiusVariants.md, filler: smallRadiusVariants.md },
        lg: { track: smallRadiusVariants.lg, thumb: smallRadiusVariants.lg, filler: smallRadiusVariants.lg },
        full: { track: smallRadiusVariants.full, thumb: smallRadiusVariants.full, filler: smallRadiusVariants.full },
        none: { track: smallRadiusVariants.none, thumb: smallRadiusVariants.none, filler: smallRadiusVariants.none },
      },
      isHovered: { true: { thumb: "cursor-grab" } },
      isDragging: { true: { thumb: "cursor-grabbing" } },
      hideThumb: { true: { track: "overflow-hidden", thumb: "opacity-0", filler: "rounded-none" } },
      hasMarks: { true: "" },
      isDisabled: { true: { track: isDisabledVariants.true, thumb: "pointer-events-none" } },
    },
    compoundVariants: [
      { color: "inverted", className: { step: "bg-default" } },
      { color: "inverted", className: { marksWrapper: "text-inverted" } },

      { isFocusVisible: true, className: { thumb: isFocusVisibleVariants.true } },
      { color: "inverted", isFocusVisible: true, className: { thumb: "outline-inverted" } },

      {
        orientation: "horizontal",
        size: "sm",
        className: { base: "py-2", track: "h-1", thumbWrapper: "inset-x-2", stepsWrapper: "inset-x-2", marksWrapper: "inset-x-2" },
      },
      {
        orientation: "horizontal",
        size: "md",
        className: { base: "py-3", track: "h-2", thumbWrapper: "inset-x-2.5", stepsWrapper: "inset-x-2.5", marksWrapper: "inset-x-2.5" },
      },
      {
        orientation: "horizontal",
        size: "lg",
        className: { base: "py-4", track: "h-3", thumbWrapper: "inset-x-3", stepsWrapper: "inset-x-3", marksWrapper: "inset-x-3" },
      },
      {
        orientation: "vertical",
        size: "sm",
        className: { base: "px-2", track: "w-1", thumbWrapper: "inset-y-2", stepsWrapper: "inset-y-2", marksWrapper: "inset-y-2" },
      },
      {
        orientation: "vertical",
        size: "md",
        className: { base: "px-3", track: "w-2", thumbWrapper: "inset-y-2.5", stepsWrapper: "inset-y-2.5", marksWrapper: "inset-y-2.5" },
      },
      {
        orientation: "vertical",
        size: "lg",
        className: { base: "px-4", track: "w-3", thumbWrapper: "inset-y-3", stepsWrapper: "inset-y-3", marksWrapper: "inset-y-3" },
      },

      { orientation: "horizontal", hasMarks: true, size: "sm", className: { sliderWrapper: "pb-4" } },
      { orientation: "horizontal", hasMarks: true, size: "md", className: { sliderWrapper: "pb-5" } },
      { orientation: "horizontal", hasMarks: true, size: "lg", className: { sliderWrapper: "pb-6" } },

      { orientation: "horizontal", hideThumb: true, className: { thumbWrapper: "inset-x-0" } },
      { orientation: "vertical", hideThumb: true, className: { thumbWrapper: "inset-y-0" } },

      { size: "sm", isDragging: true, className: { thumb: "size-5" } },
      { size: "md", isDragging: true, className: { thumb: "size-6" } },
      { size: "lg", isDragging: true, className: { thumb: "size-7" } },
    ],
  });

type SliderStylesReturnType = ReturnType<ReturnType<typeof useSliderStyles>>;

// props

interface SliderProps
  extends AriaSliderProps,
    Omit<FormValidationProps<number | number[] | undefined>, "value" | "builtinValidation">,
    FieldBaseProps,
    ColorProps,
    SizeProps,
    RadiusProps,
    ContentProps,
    StyleSlotsToStyleProps<SliderStylesReturnType> {
  hideThumb?: boolean;
  thumbLabels?: string[];
  showSteps?: boolean;
  marks?: { value: number; label: string }[];
}

// component

function _Slider(props: SliderProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Slider", props, { color: "default", size: "md", radius: "full", orientation: "horizontal" });

  const { value, hideThumb, thumbLabels, showSteps, marks, orientation, color, size, radius, startContent, endContent, classNames, styles } =
    globalProps;

  const { displayValidation } = useFormValidationState({ ...globalProps, value });
  const { fieldProps, descriptionProps, errorMessageProps } = useField({ validationBehavior: "native", ...displayValidation, ...globalProps });

  const styleSlots = useSliderStyles()({ color, variant: "light", orientation, hideThumb, size, radius, hasMarks: !!marks });

  return (
    <Provider
      values={[
        [TextContext, { slots: { description: descriptionProps, errorMessage: errorMessageProps } }],
        [FieldErrorContext, displayValidation],
      ]}
    >
      <AriaSlider
        ref={ref}
        {...mergeProps(globalProps, fieldProps)}
        className={composeRenderProps(globalProps.className, (className) =>
          styleSlots.wrapper({ className: twMerge(classNames?.wrapper, className) }),
        )}
        style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.wrapper, style))}
      >
        {({ state }) => (
          <Field {...displayValidation} {...globalProps}>
            {globalProps.label && (
              <SliderOutput className={styleSlots.output({ className: classNames?.output })} style={styles?.output}>
                {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
              </SliderOutput>
            )}

            <div className={styleSlots.sliderWrapper({ className: classNames?.sliderWrapper })} style={styles?.sliderWrapper}>
              <div className={styleSlots.contentWrapper({ className: classNames?.contentWrapper })} style={styles?.contentWrapper}>
                {startContent}

                <div
                  className={styleSlots.base({ color: displayValidation.isInvalid ? "error" : color, className: classNames?.base })}
                  style={styles?.base}
                >
                  <SliderTrack className={({ isDisabled }) => styleSlots.track({ isDisabled, className: classNames?.track })} style={styles?.track}>
                    {({ state }) => (
                      <div className={styleSlots.thumbWrapper({ className: classNames?.thumbWrapper })} style={styles?.thumbWrapper}>
                        {state.values.map((_, i) => (
                          <SliderThumb
                            key={i}
                            index={i}
                            aria-label={thumbLabels?.[i]}
                            className={({ isHovered, isDragging, isFocusVisible, isDisabled }) =>
                              styleSlots.thumb({
                                isDisabled,
                                isHovered,
                                isDragging,
                                isFocusVisible,
                                className: classNames?.thumb,
                              })
                            }
                            style={styles?.thumb}
                          />
                        ))}

                        <div
                          className={styleSlots.filler({ className: classNames?.filler })}
                          style={mergeProps(
                            {
                              [orientation === "horizontal" ? "left" : "bottom"]:
                                state.values.length === 1 ? -{ sm: 8, md: 10, lg: 12 }[size] : `${state.getThumbPercent(0) * 100}%`,
                              [orientation === "horizontal" ? "right" : "top"]:
                                state.values.length === 1 ? `${100 - state.getThumbPercent(0) * 100}%` : `${100 - state.getThumbPercent(1) * 100}%`,
                            },
                            styles?.filler,
                          )}
                        />
                      </div>
                    )}
                  </SliderTrack>

                  {showSteps && (
                    <div className={styleSlots.stepsWrapper({ className: classNames?.stepsWrapper })} style={styles?.stepsWrapper}>
                      {Array.from({
                        length:
                          ((state.values.length === 1 ? state.getThumbMaxValue(0) : state.getThumbMaxValue(1)) - state.getThumbMinValue(0)) /
                            state.step +
                          1,
                      }).map((_, i) => (
                        <div key={i} className={styleSlots.step({ className: classNames?.step })} style={styles?.step} />
                      ))}
                    </div>
                  )}

                  {marks && (
                    <div className={styleSlots.marksWrapper({ className: classNames?.marksWrapper })} style={styles?.marksWrapper}>
                      {marks.map((mark, i) => (
                        <div
                          key={i}
                          className={styleSlots.mark({ className: classNames?.mark })}
                          style={mergeProps(
                            { [orientation === "horizontal" ? "left" : "bottom"]: `${state.getValuePercent(mark.value) * 100}%` },
                            styles?.mark,
                          )}
                        >
                          {mark.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {endContent}
              </div>
            </div>
          </Field>
        )}
      </AriaSlider>
    </Provider>
  );
}

const Slider = forwardRef(_Slider);

// exports

export { Slider };
