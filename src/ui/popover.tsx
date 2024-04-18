"use client";

import { ForwardedRef, forwardRef } from "react";
import { composeRenderProps, OverlayArrow, Popover as AriaPopover, PopoverProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { cardStyles } from "./card";
import { Dialog } from "./dialog";

// styles

const popoverStyles = tv({
  base: cardStyles().base({ className: "p-4" }),
});

// props

interface PigmentPopoverProps extends PopoverProps {}

// component

function _Popover(props: PigmentPopoverProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <AriaPopover ref={ref} offset={16} {...props} className={composeRenderProps(props.className, (className) => popoverStyles({ className }))}>
      {composeRenderProps(props.children, (children, { placement }) => (
        <>
          <OverlayArrow>
            <svg
              viewBox="0 0 8 8"
              className={twMerge(
                "size-4 fill-white",
                { bottom: "rotate-180", left: "-rotate-90", right: "rotate-90", top: "", center: "" }[placement],
              )}
            >
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </OverlayArrow>
          <Dialog>{children}</Dialog>
        </>
      ))}
    </AriaPopover>
  );
}

const Popover = forwardRef(_Popover);

// exports

export { Popover };
export type { PigmentPopoverProps };
