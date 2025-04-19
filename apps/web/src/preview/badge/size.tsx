import { BellIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon } from "lucide-react";

function BadgeSizes() {
  return (
    <div className="flex items-center gap-8">
      <Badge content="99+" size="sm">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" size="md">
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="99+" size="lg">
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const size = { code, scope: { BellIcon } };
