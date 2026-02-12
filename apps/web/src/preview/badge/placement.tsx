import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgePlacement() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-8 items-center">
        <Badge placement="top right" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge placement="top left" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge placement="bottom right" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge placement="bottom left" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>
    </div>
  );
}
`;

export const placement = { code, scope: { BellIcon } };
