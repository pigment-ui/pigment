import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeDemo() {
  return (
    <Badge content="99+">
      <BellIcon className="size-8" />
    </Badge>
  );
}
`;

const props = [
  { prop: "variant", type: "solid | soft | light | bordered | faded", defaultValue: `"solid"` },
  { prop: "color", type: "default | primary | info | success | warning | error", defaultValue: `"default"` },
  { prop: "size", type: "sm | md | lg", defaultValue: `"md"` },
  { prop: "radius", type: "none | sm | md | lg | full", defaultValue: `"full"` },
  { prop: "placement", type: `"top right" | "top left" | "bottom right" | "bottom left"`, defaultValue: `"top right"` },
  { prop: "content", type: "ReactNode", defaultValue: "-" },
  { prop: "startContent", type: "ReactNode", defaultValue: "-" },
  { prop: "endContent", type: "ReactNode", defaultValue: "-" },
  { prop: "children", type: "ReactNode", defaultValue: "-" },
  { prop: "className", type: "string", defaultValue: "-" },
  { prop: "classNames", type: "{ base?: string; wrapper?: string }", defaultValue: "-" },
  { prop: "style", type: "React.CSSProperties", defaultValue: "-" },
  { prop: "styles", type: "{ base?: React.CSSProperties; wrapper?: React.CSSProperties }", defaultValue: "-" },
];

export const demo = { code, scope: { BellIcon }, props };
