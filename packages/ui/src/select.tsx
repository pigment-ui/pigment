"use client";

import { FieldInput, FieldInputBaseProps } from "./field";
import { filterInlineListBoxProps, ListBox, ListBoxItem, ListBoxSection, ListBoxSlotsType } from "./list-box";
import { Popover } from "./popover";
import { useGlobalProps } from "./provider";
import { ForwardRefType, StyleSlotsToStyleProps } from "./types";
import { useObserveElementWidth } from "./utils";
import { ChevronDownIcon, XIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef, CSSProperties, ForwardedRef, forwardRef, ReactNode, useContext } from "react";
import { mergeProps } from "react-aria";
import { Button, composeRenderProps, Select as AriaSelect, SelectProps as AriaSelectProps, SelectStateContext, SelectValue, SelectValueRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";


// styles

const useSelectStyles = () =>
  tv({
    slots: {
      base: "",
      popover: "flex flex-col p-0",
      topContent: "sticky top-0 z-10 min-h-fit overflow-auto [border-radius:inherit;] bg-inherit p-4",
      list: "max-h-full flex-1 overflow-auto p-4 outline-hidden",
    },
    variants: {
      hasTopContent: { true: { list: "pt-0" } },
    },
  });

type SelectStylesReturnType = ReturnType<ReturnType<typeof useSelectStyles>>;

// props

interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children">,
    Omit<ComponentPropsWithoutRef<typeof Popover>, keyof AriaSelectProps<T>>,
    ListBoxSlotsType<T>,
    FieldInputBaseProps,
    StyleSlotsToStyleProps<SelectStylesReturnType> {
  renderValue?: (selectValue: Omit<SelectValueRenderProps<T>, "isPlaceholder" | "state" | "selectedItem">) => ReactNode;
  topContent?: ReactNode;
  allowsRemoving?: boolean;
}

// component

function _Select<T extends object>(props: SelectProps<T>, ref: ForwardedRef<HTMLButtonElement>) {
  const globalProps = useGlobalProps("Select", props, {});

  const { renderValue, placeholder, topContent, classNames, styles, allowsRemoving } = globalProps;

  const [width, selectRef] = useObserveElementWidth<HTMLDivElement>();

  const styleSlots = useSelectStyles()({ hasTopContent: !!topContent });

  return (
    <AriaSelect
      ref={selectRef}
      placeholder="Select"
      {...globalProps}
      className={composeRenderProps(globalProps.className, (className) => styleSlots.base({ className: twMerge(classNames?.base, className) }))}
      style={composeRenderProps(globalProps.style, (style) => mergeProps(styles?.base, style))}
    >
      {(renderProps) => (
        <>
          <FieldInput
            endContent={<SelectEndContent allowsRemoving={allowsRemoving} />}
            {...renderProps}
            {...globalProps}
            fieldInputClassNames={{
              ...globalProps.fieldInputClassNames,
              base: twMerge("cursor-pointer", globalProps.fieldInputClassNames?.base),
              self: twMerge("cursor-pointer", globalProps.fieldInputClassNames?.self)
            }}
          >
            <Button ref={ref}>
              <SelectValue className={({ isPlaceholder }) => (isPlaceholder ? "opacity-50" : "")}>
                {({ selectedItems, selectedText }) =>
                  renderValue ? (selectedItems ? renderValue({
                    selectedItems: selectedItems as T[],
                    selectedText
                  }) : placeholder) : selectedText
                }
              </SelectValue>
            </Button>
          </FieldInput>

          <Popover
            maxHeight={300}
            hideArrow
            triggerRef={selectRef}
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
    </AriaSelect>
  );
}

function SelectEndContent({ allowsRemoving, className, style }: { allowsRemoving?: boolean; className?: string; style?: CSSProperties }) {
  const state = useContext(SelectStateContext);

  if (!state?.selectedKey || !allowsRemoving)
    return <ChevronDownIcon className={twMerge("duration-300", state?.isOpen && "rotate-180", className)} style={style} />;

  return <XIcon onClick={() => state?.setSelectedKey?.(null)} className={twMerge("!pointer-events-auto", className)} style={style} />;
}

const Select = (forwardRef as ForwardRefType)(_Select);

const SelectItem = ListBoxItem;

const SelectSection = ListBoxSection;

// exports

export { Select, SelectItem, SelectSection, useSelectStyles };
