"use client";

import { useGlobalProps } from "./provider";
import { useVariantAndColorStyles } from "./styles";
import { ColorProps, SizeProps, StyleSlotsToStyleProps } from "./types";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { mergeProps } from "react-aria";
import { composeRenderProps, Label, ProgressBar as AriaProgressBar, ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useProgressBarStyles = () =>
  tv({
    extend: useVariantAndColorStyles(),
    slots: {
      base: "",
      wrapper: "flex flex-col",
      labelWrapper: "",
      label: "text-default",
      valueText: "text-default",
      trackWrapper: "relative",
      track: "",
      filler: "overflow-hidden rounded-full",
    },
    variants: {
      size: {
        sm: { base: "text-xs", wrapper: "gap-0.5" },
        md: { base: "text-sm", wrapper: "gap-1" },
        lg: { base: "text-base", wrapper: "gap-1.5" },
      },
      isCircular: {
        false: {
          base: "w-full",
          labelWrapper: "flex justify-between",
          valueText: "",
          track: ["relative z-0 overflow-hidden rounded-full", "before:absolute before:inset-0 before:-z-10 before:bg-current before:opacity-10"],
          filler: ["absolute inset-y-0 left-0 z-0", "before:absolute before:inset-0 before:-z-10 before:bg-current"],
        },
        true: {
          base: "inline-block",
          wrapper: "size-fit items-center",
          labelWrapper: "order-last",
          valueText: "absolute",
          trackWrapper: "grid place-items-center stroke-current text-center",
          track: "fill-none",
          filler: "fill-none stroke-current stroke-2",
        },
      },
      isIndeterminate: { true: "" },
    },
    compoundVariants: [
      { color: "inverted", className: { label: "text-inverted", valueText: "text-inverted" } },

      { isCircular: true, size: "sm", className: { track: "size-12" } },
      { isCircular: true, size: "md", className: { track: "size-16" } },
      { isCircular: true, size: "lg", className: { track: "size-20" } },

      { isCircular: false, size: "sm", className: { track: "h-1" } },
      { isCircular: false, size: "md", className: { track: "h-2" } },
      { isCircular: false, size: "lg", className: { track: "h-3" } },

      {
        isIndeterminate: true,
        isCircular: false,
        className: { filler: "animate-out slide-out-to-right-[500%] repeat-infinite -left-1/4 [animation-duration:2s]" },
      },
      {
        isIndeterminate: true,
        isCircular: true,
        className: { trackWrapper: "animate-spin" },
      },
    ],
  });

type ProgressBarStylesReturnType = ReturnType<ReturnType<typeof useProgressBarStyles>>;

// props

interface ProgressBarProps extends AriaProgressBarProps, ColorProps, SizeProps, StyleSlotsToStyleProps<ProgressBarStylesReturnType> {
  label?: ReactNode;
  hideValueText?: boolean;
  isCircular?: boolean;
}

// component

const center = 16;
const strokeWidth = 2;
const r = 16 - strokeWidth;
const c = 2 * r * Math.PI;

function _ProgressBar(props: ProgressBarProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("ProgressBar", props, { isCircular: false, color: "default", size: "md" });

  const { color, size, label, hideValueText, isCircular, isIndeterminate, classNames, styles } = globalProps;

  const styleSlots = useProgressBarStyles()({ color, variant: "light", size, isCircular, isIndeterminate });

  const renderValueText = (valueText?: string) =>
    !hideValueText && (
      <span className={styleSlots.valueText({ className: classNames?.valueText })} style={styles?.valueText}>
        {valueText}
      </span>
    );

  return (
    <AriaProgressBar
      ref={ref}
      {...globalProps}
      className={composeRenderProps(globalProps.className, (className) => styleSlots.base({ className: twMerge(classNames?.base, className) }))}
      style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.base, style))}
    >
      {({ percentage = 0, valueText, isIndeterminate: isIndeterminateInline }) => (
        <div className={styleSlots.wrapper({ className: classNames?.wrapper })} style={styles?.wrapper}>
          {((isCircular && !!label) || (!isCircular && (!!label || !hideValueText))) && (
            <div className={styleSlots.labelWrapper({ className: classNames?.labelWrapper })} style={styles?.labelWrapper}>
              {!!label && (
                <Label className={styleSlots.label({ className: classNames?.label })} style={styles?.label}>
                  {label}
                </Label>
              )}
              {!isCircular && renderValueText(valueText)}
            </div>
          )}

          <div className={styleSlots.trackWrapper({ className: classNames?.trackWrapper })} style={styles?.trackWrapper}>
            {!isCircular ? (
              <div className={styleSlots.track({ className: classNames?.track })} style={styles?.track}>
                <div
                  className={styleSlots.filler({ className: classNames?.filler })}
                  style={mergeProps({ width: `${!isIndeterminateInline ? percentage : 25}%` }, styles?.filler)}
                />
              </div>
            ) : (
              <>
                <svg viewBox="0 0 32 32" className={styleSlots.track({ className: classNames?.track })} style={styles?.track}>
                  <circle
                    cx={center}
                    cy={center}
                    r={r}
                    strokeDasharray={`${c} ${c}`}
                    strokeDashoffset={c - ((!isIndeterminateInline ? percentage : 25) / 100) * c}
                    strokeLinecap="round"
                    transform="rotate(-90 16 16)"
                    className={styleSlots.filler({ className: twMerge(isIndeterminateInline && "animateCircle", classNames?.filler) })}
                    style={styles?.filler}
                  />
                  <circle
                    cx={center}
                    cy={center}
                    r={r}
                    strokeDasharray={`${c} ${c}`}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    transform="rotate(-90 16 16)"
                    className={styleSlots.filler({ className: twMerge("opacity-10", classNames?.filler) })}
                    style={styles?.filler}
                  />
                </svg>

                <style>{`        
        @keyframes circleAnimation {
          0% {
            stroke-dasharray: 0 56.5487;
            stroke-dashoffset: 56.5487;
          }
          50% {
            stroke-dasharray: 56.5487 0;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 0 56.5487;
            stroke-dashoffset: -56.5487;
          }
        }
        
        .animateCircle {
          animation: circleAnimation 3s linear infinite;
        }
      `}</style>
              </>
            )}

            {isCircular && renderValueText(valueText)}
          </div>
        </div>
      )}
    </AriaProgressBar>
  );
}

const ProgressBar = forwardRef(_ProgressBar);

// exports

export { ProgressBar };
