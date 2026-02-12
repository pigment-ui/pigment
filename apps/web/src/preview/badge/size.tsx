import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeSize() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge size="sm" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge size="md" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge size="lg" content="99+">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const size = { code, scope: { BellIcon } };
