import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeRadius() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge radius="none" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge radius="sm" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge radius="md" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge radius="lg" content="99+">
        <BellIcon className="size-8" />
      </Badge>
      <Badge radius="full" content="99+">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const radius = { code, scope: { BellIcon } };
