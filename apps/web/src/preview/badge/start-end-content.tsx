import { BellIcon, StarIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon, StarIcon } from "lucide-react";

function BadgeStartEndContent() {
  return (
    <div className="flex items-center gap-12">
      <Badge content="9+" startContent={<StarIcon className="size-3" />}>
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="9+" endContent={<StarIcon className="size-3" />}>
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="9+" startContent={<StarIcon className="size-3" />} endContent={<StarIcon className="size-3" />}>
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const startEndContent = { code, scope: { BellIcon, StarIcon } };
