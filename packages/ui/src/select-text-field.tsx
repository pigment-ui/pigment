"use client";

import { FieldInput, FieldInputBaseProps } from "./field";
import { filterInlineListBoxProps, ListBox } from "./list-box";
import { Popover } from "./popover";
import { Select } from "./select";
import { ForwardRefType } from "./types";
import { useObserveElementWidth } from "./utils";
import { ChevronDownIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { mergeProps } from "react-aria";
import {
  Button,
  Input,
  InputProps,
  Select as AriaSelect,
  SelectValue,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

// props

interface SelectTextFieldProps<T extends object>
  extends AriaTextFieldProps,
    Omit<InputProps, keyof AriaTextFieldProps | "size" | "color">,
    FieldInputBaseProps {
  selectProps?: ComponentPropsWithoutRef<typeof Select<T>>;
}

// component

function _SelectTextField<T extends object>(props: SelectTextFieldProps<T>, ref: ForwardedRef<HTMLInputElement>) {
  const { selectProps } = props;

  const [width, fieldRef] = useObserveElementWidth<HTMLDivElement>();

  return (
    <AriaSelect placeholder="Select" {...selectProps}>
      {(renderPropsSelect) => (
        <>
          <AriaTextField ref={fieldRef} {...props}>
            {(renderProps) => (
              <FieldInput
                {...renderProps}
                {...props}
                startButton={
                  <Button isDisabled={renderProps.isDisabled || renderProps.isReadOnly}>
                    <div className="flex items-center gap-1">
                      <SelectValue className={({ isPlaceholder }) => (isPlaceholder ? "opacity-50" : "")}>
                        {({ selectedItems, selectedText }) =>
                          selectProps?.renderValue
                            ? selectedItems
                              ? selectProps?.renderValue({ selectedItems: selectedItems as T[], selectedText })
                              : selectProps.placeholder
                            : selectedText
                        }
                      </SelectValue>
                      <ChevronDownIcon />
                    </div>
                  </Button>
                }
              >
                <Input ref={ref} />
              </FieldInput>
            )}
          </AriaTextField>

          <Popover
            maxHeight={300}
            hideArrow
            triggerRef={fieldRef}
            {...selectProps}
            className="flex flex-col overflow-hidden p-0"
            style={{ minWidth: width }}
          >
            {selectProps?.topContent && (
              <div className="sticky top-0 z-10 min-h-fit overflow-hidden [border-radius:inherit;] bg-inherit p-4">{selectProps?.topContent}</div>
            )}
            <ListBox
              {...filterInlineListBoxProps(mergeProps(selectProps, renderPropsSelect))}
              className={twMerge("max-h-full flex-1 overflow-auto p-4 outline-none", !!selectProps?.topContent && "pt-0")}
            />
          </Popover>
        </>
      )}
    </AriaSelect>
  );
}

const SelectTextField = (forwardRef as ForwardRefType)(_SelectTextField);

// exports

export { SelectTextField };

export type { SelectTextFieldProps };
