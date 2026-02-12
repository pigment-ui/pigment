import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeStyleSlots() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge
        content="99+"
        classNames={{
          base: "bg-gradient-to-r from-primary to-secondary text-white border-none",
          wrapper: "shadow-lg",
        }}
      >
        <BellIcon className="size-8" />
      </Badge>
      <Badge
        content="New"
        classNames={{
          base: "bg-info-500 text-white",
          wrapper: "ring-2 ring-info-300",
        }}
      >
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const styleSlots = { code, scope: { BellIcon } };
