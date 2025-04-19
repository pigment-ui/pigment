import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgePlacement() {
  return (
    <div className="flex items-center gap-8">
      <Badge content="99+" placement="top left">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" placement="top right">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" placement="bottom left">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" placement="bottom right">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const placement = { code, scope: { BellIcon } };
