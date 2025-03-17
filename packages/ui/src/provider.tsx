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
  --pigment-default-0: 255 255 255;
  --pigment-default-50: 250 250 250;
  --pigment-default-100: 245 245 245;
  --pigment-default-200: 229 229 229;
  --pigment-default-300: 212 212 212;
  --pigment-default-400: 163 163 163;
  --pigment-default-500: 115 115 115;
  --pigment-default-600: 82 82 82;
  --pigment-default-700: 64 64 64;
  --pigment-default-800: 38 38 38;
  --pigment-default-900: 23 23 23;
  --pigment-default-950: 10 10 10;
  --pigment-default-1000: 0 0 0;

  --pigment-primary-50: 255 247 237;
  --pigment-primary-100: 255 237 213;
  --pigment-primary-200: 254 215 170;
  --pigment-primary-300: 253 186 116;
  --pigment-primary-400: 251 146 60;
  --pigment-primary-500: 249 115 22;
  --pigment-primary-600: 234 88 12;
  --pigment-primary-700: 194 65 12;
  --pigment-primary-800: 154 52 18;
  --pigment-primary-900: 124 45 18;
  --pigment-primary-950: 67 20 7;

  --pigment-secondary-50: 235 253 255;
  --pigment-secondary-100: 206 250 254;
  --pigment-secondary-200: 161 244 253;
  --pigment-secondary-300: 82 234 253;
  --pigment-secondary-400: 0 211 242;
  --pigment-secondary-500: 0 184 219;
  --pigment-secondary-600: 0 146 184;
  --pigment-secondary-700: 0 117 149;
  --pigment-secondary-800: 1 94 120;
  --pigment-secondary-900: 15 78 100;
  --pigment-secondary-950: 7 51 69;

  --pigment-info-50: 239 246 255;
  --pigment-info-100: 219 234 254;
  --pigment-info-200: 191 219 254;
  --pigment-info-300: 147 197 253;
  --pigment-info-400: 96 165 250;
  --pigment-info-500: 59 130 246;
  --pigment-info-600: 37 99 235;
  --pigment-info-700: 29 78 216;
  --pigment-info-800: 30 64 175;
  --pigment-info-900: 30 58 138;
  --pigment-info-950: 23 37 84;

  --pigment-success-50: 240 253 244;
  --pigment-success-100: 220 252 231;
  --pigment-success-200: 187 247 208;
  --pigment-success-300: 134 239 172;
  --pigment-success-400: 74 222 128;
  --pigment-success-500: 34 197 94;
  --pigment-success-600: 22 163 74;
  --pigment-success-700: 21 128 61;
  --pigment-success-800: 22 101 52;
  --pigment-success-900: 20 83 45;
  --pigment-success-950: 5 46 22;

  --pigment-warning-50: 254 252 232;
  --pigment-warning-100: 254 249 195;
  --pigment-warning-200: 254 240 138;
  --pigment-warning-300: 253 224 71;
  --pigment-warning-400: 250 204 21;
  --pigment-warning-500: 234 179 8;
  --pigment-warning-600: 202 138 4;
  --pigment-warning-700: 161 98 7;
  --pigment-warning-800: 133 77 14;
  --pigment-warning-900: 113 63 18;
  --pigment-warning-950: 66 32 6;

  --pigment-error-50: 254 242 242;
  --pigment-error-100: 254 226 226;
  --pigment-error-200: 254 202 202;
  --pigment-error-300: 252 165 165;
  --pigment-error-400: 248 113 113;
  --pigment-error-500: 239 68 68;
  --pigment-error-600: 220 38 38;
  --pigment-error-700: 185 28 28;
  --pigment-error-800: 153 27 27;
  --pigment-error-900: 127 29 29;
  --pigment-error-950: 69 10 10;
}

:root[class="dark"] {
  --pigment-default-0: 0 0 0;
  --pigment-default-50: 10 10 10;
  --pigment-default-100: 23 23 23;
  --pigment-default-200: 38 38 38;
  --pigment-default-300: 64 64 64;
  --pigment-default-400: 82 82 82;
  --pigment-default-500: 115 115 115;
  --pigment-default-600: 163 163 163;
  --pigment-default-700: 212 212 212;
  --pigment-default-800: 229 229 229;
  --pigment-default-900: 245 245 245;
  --pigment-default-950: 250 250 250;
  --pigment-default-1000: 255 255 255;

  --pigment-primary-50: 67 20 7;
  --pigment-primary-100: 124 45 18;
  --pigment-primary-200: 154 52 18;
  --pigment-primary-300: 194 65 12;
  --pigment-primary-400: 234 88 12;
  --pigment-primary-500: 249 115 22;
  --pigment-primary-600: 251 146 60;
  --pigment-primary-700: 253 186 116;
  --pigment-primary-800: 254 215 170;
  --pigment-primary-900: 255 237 213;
  --pigment-primary-950: 255 247 237;

  --pigment-secondary-50: 7 51 69;
  --pigment-secondary-100: 15 78 100;
  --pigment-secondary-200: 1 94 120;
  --pigment-secondary-300: 0 117 149;
  --pigment-secondary-400: 0 146 184;
  --pigment-secondary-500: 0 184 219;
  --pigment-secondary-600: 0 211 242;
  --pigment-secondary-700: 82 234 253;
  --pigment-secondary-800: 161 244 253;
  --pigment-secondary-900: 206 250 254;
  --pigment-secondary-950: 235 253 255;

  --pigment-info-50: 23 37 84;
  --pigment-info-100: 30 58 138;
  --pigment-info-200: 30 64 175;
  --pigment-info-300: 29 78 216;
  --pigment-info-400: 37 99 235;
  --pigment-info-500: 59 130 246;
  --pigment-info-600: 96 165 250;
  --pigment-info-700: 147 197 253;
  --pigment-info-800: 191 219 254;
  --pigment-info-900: 219 234 254;
  --pigment-info-950: 239 246 255;

  --pigment-success-50: 5 46 22;
  --pigment-success-100: 20 83 45;
  --pigment-success-200: 22 101 52;
  --pigment-success-300: 21 128 61;
  --pigment-success-400: 22 163 74;
  --pigment-success-500: 34 197 94;
  --pigment-success-600: 74 222 128;
  --pigment-success-700: 134 239 172;
  --pigment-success-800: 187 247 208;
  --pigment-success-900: 220 252 231;
  --pigment-success-950: 240 253 244;

  --pigment-warning-50: 66 32 6;
  --pigment-warning-100: 113 63 18;
  --pigment-warning-200: 133 77 14;
  --pigment-warning-300: 161 98 7;
  --pigment-warning-400: 202 138 4;
  --pigment-warning-500: 234 179 8;
  --pigment-warning-600: 250 204 21;
  --pigment-warning-700: 253 224 71;
  --pigment-warning-800: 254 240 138;
  --pigment-warning-900: 254 249 195;
  --pigment-warning-950: 254 252 232;

  --pigment-error-50: 69 10 10;
  --pigment-error-100: 127 29 29;
  --pigment-error-200: 153 27 27;
  --pigment-error-300: 185 28 28;
  --pigment-error-400: 220 38 38;
  --pigment-error-500: 239 68 68;
  --pigment-error-600: 248 113 113;
  --pigment-error-700: 252 165 165;
  --pigment-error-800: 254 202 202;
  --pigment-error-900: 254 226 226;
  --pigment-error-950: 254 242 242;
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
