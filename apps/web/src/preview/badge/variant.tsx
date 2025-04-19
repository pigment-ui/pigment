import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeVariant() {
  return (
    <div className="flex flex-wrap gap-8">
      <Badge content="99+" variant="solid">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" variant="soft">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" variant="light">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" variant="bordered">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" variant="faded">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const variant = { code, scope: { BellIcon } };
