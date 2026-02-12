import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeVariant() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge variant="solid" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="soft" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="light" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="bordered" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="ghost" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="faded" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="card" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="gradient" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="animated" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge variant="shadow" content="99+">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const variant = { code, scope: { BellIcon } };
