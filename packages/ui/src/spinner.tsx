"use client";

import { useGlobalProps } from "./provider";
import React, { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

// styles

const useSpinnerStyles = () =>
  tv({
    base: "inline-block animate-spin",
  });

// component

function _Spinner(props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Spinner", props, {});

  return (
    <div ref={ref} {...globalProps} className={useSpinnerStyles()({ className: globalProps.className })}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative size-full"
      >
        <circle cx="12" cy="12" r="9" className="animateCircle absolute inset-0" />
        <circle cx="12" cy="12" r="9" className="absolute inset-0 opacity-10" />
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
    </div>
  );
}

const Spinner = forwardRef(_Spinner);

// exports

export { Spinner };
