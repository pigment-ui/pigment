"use client";

import { FieldInput, FieldInputBaseProps } from "./field";
import { filterInlineListBoxProps, ListBox, ListBoxItem, ListBoxSection, ListBoxSlotsType } from "./list-box";
import { Popover } from "./popover";
import { useGlobalProps } from "./provider";
import { useSelectStyles } from "./select";
import { ForwardRefType, StyleSlotsToStyleProps } from "./types";
import { useObserveElementWidth } from "./utils";
import { ChevronDownIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, ReactNode } from "react";
import { mergeProps } from "react-aria";
import { Button, ComboBox as AriaComboBox, ComboBoxProps as AriaComboBoxProps, composeRenderProps, Input, InputProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

// styles

const useComboBoxStyles = useSelectStyles;

type ComboBoxStylesReturnType = ReturnType<ReturnType<typeof useComboBoxStyles>>;

// props

interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children">,
    Omit<InputProps, keyof AriaComboBoxProps<T> | "color" | "size">,
    Omit<ComponentPropsWithoutRef<typeof Popover>, keyof AriaComboBoxProps<T>>,
    ListBoxSlotsType<T>,
    FieldInputBaseProps,
    StyleSlotsToStyleProps<ComboBoxStylesReturnType> {
  topContent?: ReactNode;
}

// component

function _ComboBox<T extends object>(props: ComboBoxProps<T>, ref: ForwardedRef<HTMLInputElement>) {
  const globalProps = useGlobalProps("ComboBox", props);

  const { topContent, classNames, styles } = globalProps;

  const [width, comboBoxRef] = useObserveElementWidth<HTMLDivElement>();

  const styleSlots = useSelectStyles()({ hasTopContent: !!topContent });

  return (
    <AriaComboBox
      ref={comboBoxRef}
      menuTrigger="focus"
      {...globalProps}
      className={composeRenderProps(globalProps.className, (className) => styleSlots.base({ className: twMerge(classNames?.base, className) }))}
      style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.base, style))}
    >
      {(renderProps) => (
        <>
          <FieldInput
            endButton={
              <Button>
                <ChevronDownIcon />
              </Button>
            }
            {...renderProps}
            {...globalProps}
          >
            <Input ref={ref} />
          </FieldInput>

          <Popover
            maxHeight={300}
            hideArrow
            triggerRef={comboBoxRef}
            {...globalProps}
            className={styleSlots.popover({ className: classNames?.popover })}
            style={mergeProps({ width }, styles?.popover)}
          >
            {topContent && (
              <div className={styleSlots.topContent({ className: classNames?.topContent })} style={styles?.topContent}>
                {topContent}
              </div>
            )}
            <ListBox
              {...filterInlineListBoxProps(mergeProps(globalProps, renderProps))}
              className={styleSlots.list({ className: classNames?.list })}
              style={styles?.list}
            />
          </Popover>
        </>
      )}
    </AriaComboBox>
  );
}

const ComboBox = (forwardRef as ForwardRefType)(_ComboBox);

const ComboBoxItem = ListBoxItem;

const ComboBoxSection = ListBoxSection;

// exports

export { ComboBox, ComboBoxItem, ComboBoxSection };
