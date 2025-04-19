import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeRadius() {
  return (
    <div className="flex items-center gap-8">
      <Badge content="99+" radius="none">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" radius="sm">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" radius="md">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" radius="lg">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" radius="full">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const radius = { code, scope: { BellIcon } };
