const code = `
import { Button } from "pigment-ui";

function ButtonDemo() {
  return <Button onPress={() => alert("Clicked!")}>Click me</Button>;
}
`;

const props = [
  { prop: "variant", type: "solid | soft | light | bordered | faded", defaultValue: `"solid"` },
  { prop: "color", type: "default | primary | info | success | warning | error", defaultValue: `"default"` },
  { prop: "size", type: "sm | md | lg", defaultValue: `"md"` },
  { prop: "radius", type: "none | sm | md | lg | full", defaultValue: 'props.size || "md"' },
  { prop: "startContent", type: "ReactNode", defaultValue: "-" },
  { prop: "endContent", type: "ReactNode", defaultValue: "-" },
  { prop: "isDisabled", type: "boolean", defaultValue: "false" },
  { prop: "isLoading", type: "boolean", defaultValue: "false" },
  { prop: "spinner", type: "ReactNode", defaultValue: <>&lt;Spinner /&gt;</> },
  { prop: "spinnerPlacement", type: "start | center | end", defaultValue: `"center"` },
  { prop: "isCompact", type: "boolean", defaultValue: "false" },
  { prop: "asChild", type: "boolean", defaultValue: "false" },
];

export const demo = { code, props };
