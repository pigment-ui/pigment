"use client";

import { useCardStyles } from "./card";
import { useGlobalProps } from "./provider";
import { useHelperButtonStyles } from "./styles";
import { SizeProps, StyleSlotsToSlots, StyleSlotsToStyleProps } from "./types";
import { createSlots } from "./utils";
import { PlacementAxis } from "@react-types/overlays";
import { XIcon } from "lucide-react";
import React, { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { mergeProps, useId } from "react-aria";
import {
  Button as AriaButton,
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// styles

const useModalStyles = () =>
  tv({
    extend: useCardStyles(),
    slots: {
      base: "relative duration-300",
      header: "",
      body: "",
      dialog: "relative flex flex-col outline-hidden",
      backdrop: "fixed inset-0 z-999 grid place-items-center duration-300",
      closeButton: useHelperButtonStyles()({ variant: "light", className: "absolute top-2 right-2 z-10 rounded-full p-2" }),
    },
    variants: {
      placement: {
        top: { backdrop: "items-start pb-16", base: "rounded-t-none" },
        bottom: { backdrop: "items-end pt-16", base: "rounded-b-none" },
        left: { backdrop: "justify-start pr-4", base: "rounded-l-none" },
        right: { backdrop: "justify-end pl-4", base: "rounded-r-none" },
        center: { backdrop: "px-4 py-16" },
      },
      size: {
        sm: { closeButton: "[&>svg]:size-3" },
        md: { closeButton: "[&>svg]:size-4" },
        lg: { closeButton: "[&>svg]:size-5" },
      },
      backdrop: {
        blur: { backdrop: "bg-default/25 backdrop-blur-lg" },
        opaque: { backdrop: "bg-default/50" },
        transparent: { backdrop: "bg-transparent" },
      },
      insideScroll: {
        true: { body: "flex-1 overflow-y-auto" },
        false: { backdrop: "overflow-auto" },
      },
    },
    compoundVariants: [
      { size: "sm", placement: ["left", "right", "center"], className: { base: "max-w-[600px]" } },
      { size: "md", placement: ["left", "right", "center"], className: { base: "max-w-[900px]" } },
      { size: "lg", placement: ["left", "right", "center"], className: { base: "max-w-[1200px]" } },
      { size: "sm", insideScroll: true, placement: ["top", "bottom"], className: { dialog: "h-[600px]" } },
      { size: "md", insideScroll: true, placement: ["top", "bottom"], className: { dialog: "h-[900px]" } },
      { size: "lg", insideScroll: true, placement: ["top", "bottom"], className: { dialog: "h-[1200px]" } },
      { insideScroll: true, placement: ["left", "right"], className: { dialog: "max-h-screen" } },
      { insideScroll: true, placement: ["top", "bottom"], className: { dialog: "max-h-[calc(100vh-4rem)]" } },
      { insideScroll: true, placement: ["center"], className: { dialog: "max-h-[calc(100vh-8rem)]" } },
    ],
  });

type ModalStylesReturnType = ReturnType<ReturnType<typeof useModalStyles>>;

// props

interface ModalProps extends ModalOverlayProps, SizeProps, StyleSlotsToStyleProps<ModalStylesReturnType> {
  backdrop?: "blur" | "opaque" | "transparent";
  insideScroll?: boolean;
  hideCloseButton?: boolean;
  placement?: PlacementAxis;
}

// slots

interface ModalSlotsType extends StyleSlotsToSlots<ModalStylesReturnType> {}

const [ModalSlotsProvider, useModalSlots] = createSlots<Record<"headerId" | "bodyId", string> & ModalSlotsType>();

// component

function _Modal(props: ModalProps, ref: ForwardedRef<HTMLDivElement>) {
  const globalProps = useGlobalProps("Modal", props, { placement: "center", size: "md", backdrop: "blur-sm", insideScroll: true });

  const { placement, size, backdrop, insideScroll, hideCloseButton, children, classNames, styles, ...restProps } = globalProps;

  const headerId = useId();
  const bodyId = useId();

  const styleSlots = useModalStyles()({ placement, size, backdrop, insideScroll });

  return (
    <ModalSlotsProvider value={{ headerId, bodyId, styleSlots, classNames, styles }}>
      <ModalOverlay
        isDismissable
        {...restProps}
        className={({ isEntering, isExiting }) =>
          styleSlots.backdrop({ className: twMerge(isEntering && "animate-in fade-in", isExiting && "animate-out fade-out", classNames?.backdrop) })
        }
        style={styles?.backdrop}
      >
        {composeRenderProps(globalProps.children, (children, { state, isEntering, isExiting }) => (
          <AriaModal
            ref={ref}
            {...restProps}
            className={composeRenderProps(globalProps.className, (className) =>
              styleSlots.base({
                className: twMerge(
                  isEntering && "animate-in fade-in",
                  isExiting && "animate-out fade-out",
                  {
                    left: isEntering ? "slide-in-from-left" : isExiting ? "slide-out-to-left" : "",
                    right: isEntering ? "slide-in-from-right" : isExiting ? "slide-out-to-right" : "",
                    top: isEntering ? "slide-in-from-top" : isExiting ? "slide-out-to-top" : "",
                    bottom: isEntering ? "slide-in-from-bottom" : isExiting ? "slide-out-to-bottom" : "",
                    center: isEntering ? "zoom-in-95" : isExiting ? "zoom-out-95" : "",
                  }[placement || "center"],
                  classNames?.base,
                  className,
                ),
              }),
            )}
            style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.base, style))}
          >
            <Dialog
              aria-labelledby={headerId}
              aria-describedby={bodyId}
              className={styleSlots.dialog({ className: classNames?.dialog })}
              style={styles?.dialog}
            >
              {children}
            </Dialog>
            {!hideCloseButton && (
              <AriaButton
                aria-label="Modal close button"
                onPress={() => state.close()}
                className={styleSlots.closeButton({ className: classNames?.closeButton })}
                style={styles?.closeButton}
              >
                <XIcon />
              </AriaButton>
            )}
          </AriaModal>
        ))}
      </ModalOverlay>
    </ModalSlotsProvider>
  );
}

const Modal = forwardRef(_Modal);

function _ModalHeader(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <header
      ref={ref}
      id={headerId}
      className={styleSlots.header({ className: twMerge(classNames?.header, className) })}
      style={mergeProps(styles?.header, style)}
      {...restProps}
    />
  );
}

const ModalHeader = forwardRef(_ModalHeader);

function _ModalBody(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <section
      ref={ref}
      id={bodyId}
      className={styleSlots.body({ className: twMerge(classNames?.body, className) })}
      style={mergeProps(styles?.body, style)}
      {...restProps}
    />
  );
}

const ModalBody = forwardRef(_ModalBody);

function _ModalFooter(props: HTMLAttributes<HTMLElement>, ref: ForwardedRef<HTMLElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <footer
      ref={ref}
      className={styleSlots.footer({ className: twMerge(classNames?.footer, className) })}
      style={mergeProps(styles?.footer, style)}
      {...restProps}
    />
  );
}

const ModalFooter = forwardRef(_ModalFooter);

function _ModalTitle<T extends object>(props: HTMLAttributes<HTMLHeadingElement>, ref: ForwardedRef<HTMLHeadingElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <h3
      ref={ref}
      className={styleSlots.title({ className: twMerge(classNames?.title, className) })}
      style={mergeProps(styles?.title, style)}
      {...restProps}
    />
  );
}

const ModalTitle = forwardRef(_ModalTitle);

function _ModalDescription<T extends object>(props: HTMLAttributes<HTMLParagraphElement>, ref: ForwardedRef<HTMLParagraphElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <p
      ref={ref}
      className={styleSlots.description({ className: twMerge(classNames?.description, className) })}
      style={mergeProps(styles?.description, style)}
      {...restProps}
    />
  );
}

const ModalDescription = forwardRef(_ModalDescription);

function _ModalButtons<T extends object>(props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) {
  const { headerId, bodyId, styleSlots, className, classNames, style, styles, ...restProps } = useModalSlots(props);

  return (
    <div
      ref={ref}
      className={styleSlots.buttons({ className: twMerge(classNames?.buttons, className) })}
      style={mergeProps(styles?.buttons, style)}
      {...restProps}
    />
  );
}

const ModalButtons = forwardRef(_ModalButtons);

// exports

export { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, ModalDescription, ModalButtons, DialogTrigger as ModalTrigger };
