import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeContent() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="New">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="3">
        <BellIcon className="size-8" />
      </Badge>
      <Badge>
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const content = { code, scope: { BellIcon } };
