const code = `
import { Calendar } from "pigment-ui";

function CalendarDemo() {
  return (
    <Calendar aria-label="Appointment date" />
  );
}
`;
const props = [
  { prop: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"` },
  { prop: "radius", type: `"none" | "sm" | "md" | "lg" | "full"`, defaultValue: 'props.size || "md"' },
  { prop: "color", type: `"default" | "primary" | "info" | "success" | "warning" | "error"`, defaultValue: `"default"` },
  { prop: "visibleMonthCount", type: "number", defaultValue: "1" },
  { prop: "asCard", type: "boolean", defaultValue: "true" },
  { prop: "label", type: "ReactNode", defaultValue: "-" },
  { prop: "description", type: "ReactNode", defaultValue: "-" },
  { prop: "errorMessage", type: "ReactNode", defaultValue: "-" },
  { prop: "validationState", type: `"valid" | "invalid"`, defaultValue: "-" },
  { prop: "className", type: "string", defaultValue: "-" },
  {
    prop: "classNames",
    type: `{ wrapper?: string; calendarWrapper?: string; header?: string; heading?: string; button?: string; grid?: string; gridWrapper?: string }`,
    defaultValue: "-",
  },
  { prop: "style", type: "React.CSSProperties", defaultValue: "-" },
  {
    prop: "styles",
    type: `{ wrapper?: React.CSSProperties; calendarWrapper?: React.CSSProperties; header?: React.CSSProperties; heading?: React.CSSProperties; button?: React.CSSProperties; grid?: React.CSSProperties; gridWrapper?: React.CSSProperties }`,
    defaultValue: "-",
  },
];

export const demo = { code, props };
