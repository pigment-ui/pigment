"use client";

import { Alert } from "./alert";
import { Badge } from "./badge";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Card } from "./card";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { Chip } from "./chip";
import { ColorField } from "./color-field";
import { ComboBox } from "./combo-box";
import { DateField } from "./date-field";
import { DatePicker } from "./date-picker";
import { DateRangePicker } from "./date-range-picker";
import { Disclosure, DisclosureGroup } from "./disclosure";
import { Field, FieldInput } from "./field";
import { FileTriggerDropzone } from "./file-trigger-dropzone";
import { ListBox } from "./list-box";
import { Menu } from "./menu";
import { Modal } from "./modal";
import { NumberField } from "./number-field";
import { Pagination } from "./pagination";
import { Popover } from "./popover";
import { ProgressBar } from "./progress-bar";
import { RadioGroup } from "./radio";
import { RangeCalendar } from "./range-calendar";
import { SearchField } from "./search-field";
import { Select } from "./select";
import { Separator } from "./separator";
import { Skeleton } from "./skeleton";
import { Slider } from "./slider";
import { Spinner } from "./spinner";
import { Switch } from "./switch";
import { Tabs } from "./tabs";
import { TagGroup } from "./tag";
import { TextArea } from "./text-area";
import { TextField } from "./text-field";
import { TimeField } from "./time-field";
import { Tooltip } from "./tooltip";
import { ChildrenProps } from "./types";
import { createSlots } from "./utils";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";

type MyProps<T extends FunctionComponent<any>> = (props: ComponentPropsWithoutRef<T>) => ComponentPropsWithoutRef<T>;

type GlobalSlotsType = {
  defaultComponentProps?: Partial<{
    Alert: MyProps<typeof Alert>;
    Badge: MyProps<typeof Badge>;
    Button: MyProps<typeof Button>;
    Calendar: MyProps<typeof Calendar>;
    Card: MyProps<typeof Card>;
    Checkbox: MyProps<typeof Checkbox>;
    CheckboxGroup: MyProps<typeof CheckboxGroup>;
    Chip: MyProps<typeof Chip>;
    ColorField: MyProps<typeof ColorField>;
    ComboBox: MyProps<typeof ComboBox>;
    DateField: MyProps<typeof DateField>;
    DatePicker: MyProps<typeof DatePicker>;
    DateRangePicker: MyProps<typeof DateRangePicker>;
    Disclosure: MyProps<typeof Disclosure>;
    DisclosureGroup: MyProps<typeof DisclosureGroup>;
    FileTriggerDropzone: MyProps<typeof FileTriggerDropzone>;
    Field: MyProps<typeof Field>;
    FieldInput: MyProps<typeof FieldInput>;
    ListBox: MyProps<typeof ListBox>;
    Menu: MyProps<typeof Menu>;
    Modal: MyProps<typeof Modal>;
    NumberField: MyProps<typeof NumberField>;
    Pagination: MyProps<typeof Pagination>;
    Popover: MyProps<typeof Popover>;
    ProgressBar: MyProps<typeof ProgressBar>;
    RadioGroup: MyProps<typeof RadioGroup>;
    RangeCalendar: MyProps<typeof RangeCalendar>;
    SearchField: MyProps<typeof SearchField>;
    Select: MyProps<typeof Select>;
    Separator: MyProps<typeof Separator>;
    Skeleton: MyProps<typeof Skeleton>;
    Slider: MyProps<typeof Slider>;
    Spinner: MyProps<typeof Spinner>;
    Switch: MyProps<typeof Switch>;
    Tabs: MyProps<typeof Tabs>;
    TagGroup: MyProps<typeof TagGroup>;
    TextArea: MyProps<typeof TextArea>;
    TextField: MyProps<typeof TextField>;
    TimeField: MyProps<typeof TimeField>;
    Tooltip: MyProps<typeof Tooltip>;
  }>;
  extendVariantAndColorStyles?: any;
};

const [GlobalSlots, useGlobalSlots] = createSlots<GlobalSlotsType>();

function Provider({ defaultComponentProps = {}, extendVariantAndColorStyles, children }: GlobalSlotsType & ChildrenProps) {
  return (
    <GlobalSlots value={{ defaultComponentProps, extendVariantAndColorStyles }}>
      {children}

      <style suppressHydrationWarning>
        {`
:root {
  --pigment-default-0: 100 0 0;
  --pigment-default-50: 0.985 0 0;
  --pigment-default-100: 0.97 0 0;
  --pigment-default-200: 0.922 0 0;
  --pigment-default-300: 0.87 0 0;
  --pigment-default-400: 0.708 0 0;
  --pigment-default-500: 0.556 0 0;
  --pigment-default-600: 0.439 0 0;
  --pigment-default-700: 0.371 0 0;
  --pigment-default-800: 0.269 0 0;
  --pigment-default-900: 0.205 0 0;
  --pigment-default-950: 0.145 0 0;
  --pigment-default-1000: 0 0 0;

  --pigment-primary-50: 0.98 0.016 73.684;
  --pigment-primary-100: 0.954 0.038 75.164;
  --pigment-primary-200: 0.901 0.076 70.697;
  --pigment-primary-300: 0.837 0.128 66.29;
  --pigment-primary-400: 0.75 0.183 55.934;
  --pigment-primary-500: 0.705 0.213 47.604;
  --pigment-primary-600: 0.646 0.222 41.116;
  --pigment-primary-700: 0.553 0.195 38.402;
  --pigment-primary-800: 0.47 0.157 37.304;
  --pigment-primary-900: 0.408 0.123 38.172;
  --pigment-primary-950: 0.266 0.079 36.259;

  --pigment-secondary-50: 0.984 0.019 200.873;
  --pigment-secondary-100: 0.956 0.045 203.388;
  --pigment-secondary-200: 0.917 0.08 205.041;
  --pigment-secondary-300: 0.865 0.127 207.078;
  --pigment-secondary-400: 0.789 0.154 211.53;
  --pigment-secondary-500: 0.715 0.143 215.221;
  --pigment-secondary-600: 0.609 0.126 221.723;
  --pigment-secondary-700: 0.52 0.105 223.128;
  --pigment-secondary-800: 0.45 0.085 224.283;
  --pigment-secondary-900: 0.398 0.07 227.392;
  --pigment-secondary-950: 0.302 0.056 229.695;

  --pigment-info-50: 0.97 0.014 254.604;
  --pigment-info-100: 0.932 0.032 255.585;
  --pigment-info-200: 0.882 0.059 254.128;
  --pigment-info-300: 0.809 0.105 251.813;
  --pigment-info-400: 0.707 0.165 254.624;
  --pigment-info-500: 0.623 0.214 259.815;
  --pigment-info-600: 0.546 0.245 262.881;
  --pigment-info-700: 0.488 0.243 264.376;
  --pigment-info-800: 0.424 0.199 265.638;
  --pigment-info-900: 0.379 0.146 265.522;
  --pigment-info-950: 0.282 0.091 267.935;

  --pigment-success-50: 0.982 0.018 155.826;
  --pigment-success-100: 0.962 0.044 156.743;
  --pigment-success-200: 0.925 0.084 155.995;
  --pigment-success-300: 0.871 0.15 154.449;
  --pigment-success-400: 0.792 0.209 151.711;
  --pigment-success-500: 0.723 0.219 149.579;
  --pigment-success-600: 0.627 0.194 149.214;
  --pigment-success-700: 0.527 0.154 150.069;
  --pigment-success-800: 0.448 0.119 151.328;
  --pigment-success-900: 0.393 0.095 152.535;
  --pigment-success-950: 0.266 0.065 152.934;

  --pigment-warning-50: 0.987 0.022 95.277;
  --pigment-warning-100: 0.962 0.059 95.617;
  --pigment-warning-200: 0.924 0.12 95.746;
  --pigment-warning-300: 0.879 0.169 91.605;
  --pigment-warning-400: 0.828 0.189 84.429;
  --pigment-warning-500: 0.769 0.188 70.08;
  --pigment-warning-600: 0.666 0.179 58.318;
  --pigment-warning-700: 0.555 0.163 48.998;
  --pigment-warning-800: 0.473 0.137 46.201;
  --pigment-warning-900: 0.414 0.112 45.904;
  --pigment-warning-950: 0.279 0.077 45.635;

  --pigment-error-50: 0.971 0.013 17.38;
  --pigment-error-100: 0.936 0.032 17.717;
  --pigment-error-200: 0.885 0.062 18.334;
  --pigment-error-300: 0.808 0.114 19.571;
  --pigment-error-400: 0.704 0.191 22.216;
  --pigment-error-500: 0.637 0.237 25.331;
  --pigment-error-600: 0.577 0.245 27.325;
  --pigment-error-700: 0.505 0.213 27.518;
  --pigment-error-800: 0.444 0.177 26.899;
  --pigment-error-900: 0.396 0.141 25.723;
  --pigment-error-950: 0.258 0.092 26.042;
}

:root[class="dark"] {
  --pigment-default-0: 0 0 0;
  --pigment-default-50: 0.145 0 0;
  --pigment-default-100: 0.205 0 0;
  --pigment-default-200: 0.269 0 0;
  --pigment-default-300: 0.371 0 0;
  --pigment-default-400: 0.439 0 0;
  --pigment-default-500: 0.556 0 0;
  --pigment-default-600: 0.708 0 0;
  --pigment-default-700: 0.87 0 0;
  --pigment-default-800: 0.922 0 0;
  --pigment-default-900: 0.97 0 0;
  --pigment-default-950: 0.985 0 0;
  --pigment-default-1000: 100 0 0;

  --pigment-primary-50: 0.266 0.079 36.259;
  --pigment-primary-100: 0.408 0.123 38.172;
  --pigment-primary-200: 0.47 0.157 37.304;
  --pigment-primary-300: 0.553 0.195 38.402;
  --pigment-primary-400: 0.646 0.222 41.116;
  --pigment-primary-500: 0.705 0.213 47.604;
  --pigment-primary-600: 0.75 0.183 55.934;
  --pigment-primary-700: 0.837 0.128 66.29;
  --pigment-primary-800: 0.901 0.076 70.697;
  --pigment-primary-900: 0.954 0.038 75.164;
  --pigment-primary-950: 0.98 0.016 73.684;

  --pigment-secondary-50: 0.302 0.056 229.695;
  --pigment-secondary-100: 0.398 0.07 227.392;
  --pigment-secondary-200: 0.45 0.085 224.283;
  --pigment-secondary-300: 0.52 0.105 223.128;
  --pigment-secondary-400: 0.609 0.126 221.723;
  --pigment-secondary-500: 0.715 0.143 215.221;
  --pigment-secondary-600: 0.789 0.154 211.53;
  --pigment-secondary-700: 0.865 0.127 207.078;
  --pigment-secondary-800: 0.917 0.08 205.041;
  --pigment-secondary-900: 0.956 0.045 203.388;
  --pigment-secondary-950: 0.984 0.019 200.873;

  --pigment-info-50: 0.282 0.091 267.935;
  --pigment-info-100: 0.379 0.146 265.522;
  --pigment-info-200: 0.424 0.199 265.638;
  --pigment-info-300: 0.488 0.243 264.376;
  --pigment-info-400: 0.546 0.245 262.881;
  --pigment-info-500: 0.623 0.214 259.815;
  --pigment-info-600: 0.707 0.165 254.624;
  --pigment-info-700: 0.809 0.105 251.813;
  --pigment-info-800: 0.882 0.059 254.128;
  --pigment-info-900: 0.932 0.032 255.585;
  --pigment-info-950: 0.97 0.014 254.604;

  --pigment-success-50: 0.266 0.065 152.934;
  --pigment-success-100: 0.393 0.095 152.535;
  --pigment-success-200: 0.448 0.119 151.328;
  --pigment-success-300: 0.527 0.154 150.069;
  --pigment-success-400: 0.627 0.194 149.214;
  --pigment-success-500: 0.723 0.219 149.579;
  --pigment-success-600: 0.792 0.209 151.711;
  --pigment-success-700: 0.871 0.15 154.449;
  --pigment-success-800: 0.925 0.084 155.995;
  --pigment-success-900: 0.962 0.044 156.743;
  --pigment-success-950: 0.982 0.018 155.826;

  --pigment-warning-50: 0.279 0.077 45.635;
  --pigment-warning-100: 0.414 0.112 45.904;
  --pigment-warning-200: 0.473 0.137 46.201;
  --pigment-warning-300: 0.555 0.163 48.998;
  --pigment-warning-400: 0.666 0.179 58.318;
  --pigment-warning-500: 0.769 0.188 70.08;
  --pigment-warning-600: 0.828 0.189 84.429;
  --pigment-warning-700: 0.879 0.169 91.605;
  --pigment-warning-800: 0.924 0.12 95.746;
  --pigment-warning-900: 0.962 0.059 95.617;
  --pigment-warning-950: 0.987 0.022 95.277;

  --pigment-error-50: 0.258 0.092 26.042;
  --pigment-error-100: 0.396 0.141 25.723;
  --pigment-error-200: 0.444 0.177 26.899;
  --pigment-error-300: 0.505 0.213 27.518;
  --pigment-error-400: 0.577 0.245 27.325;
  --pigment-error-500: 0.637 0.237 25.331;
  --pigment-error-600: 0.704 0.191 22.216;
  --pigment-error-700: 0.808 0.114 19.571;
  --pigment-error-800: 0.885 0.062 18.334;
  --pigment-error-900: 0.936 0.032 17.717;
  --pigment-error-950: 0.971 0.013 17.38;
}
      `}
      </style>
    </GlobalSlots>
  );
}

function useGlobalProps<T, D>(componentName: string, props: T, defaultProps?: D) {
  // const newProps = useGlobalSlots()?.defaultComponentProps?.[componentName as keyof GlobalSlotsType["defaultComponentProps"]]?.({
  //   ...defaultProps,
  //   ...props,
  // });

  return {
    ...defaultProps,
    // ...newProps,
    ...props,
  } as T & D;
}

export { Provider, useGlobalProps, useGlobalSlots };
