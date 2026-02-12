import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeColor() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="default" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="default" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="inverted" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="inverted" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="primary" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="primary" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="secondary" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="secondary" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="info" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="info" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="success" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="success" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="warning" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="warning" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <Badge color="error" variant="solid" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="soft" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="light" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="bordered" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="ghost" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="faded" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="card" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="gradient" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="animated" content="99+">
          <BellIcon className="size-8" />
        </Badge>
        <Badge color="error" variant="shadow" content="99+">
          <BellIcon className="size-8" />
        </Badge>
      </div>
    </div>
  );
}
`;

export const color = { code, scope: { BellIcon } };
