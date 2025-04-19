import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeColorVariants() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <Badge content="99+" color="default" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="default" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="default" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="default" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="default" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex items-center gap-6">
        <Badge content="99+" color="primary" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="primary" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="primary" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="primary" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="primary" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex items-center gap-6">
        <Badge content="99+" color="info" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="info" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="info" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="info" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="info" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex items-center gap-6">
        <Badge content="99+" color="success" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="success" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="success" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="success" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="success" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex items-center gap-6">
        <Badge content="99+" color="warning" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="warning" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="warning" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="warning" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="warning" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>

      <div className="flex items-center gap-6">
        <Badge content="99+" color="error" variant="solid">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="error" variant="soft">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="error" variant="light">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="error" variant="bordered">
          <BellIcon className="size-8" />
        </Badge>
        <Badge content="99+" color="error" variant="faded">
          <BellIcon className="size-8" />
        </Badge>
      </div>
    </div>
  );
}
`;

export const color = { code, scope: { BellIcon } };
