import { BellIcon, PinIcon, UserIcon } from "lucide-react";

const code = `
import { Badge } from "pigment-ui";
import { BellIcon, PinIcon, UserIcon } from "lucide-react";

function BadgeContentIcons() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <Badge content="99+" startContent={<UserIcon />}>
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="New" endContent={<PinIcon />}>
        <BellIcon className="size-8" />
      </Badge>
      <Badge content="3" startContent={<UserIcon />} endContent={<PinIcon />}>
        <BellIcon className="size-8" />
      </Badge>
    </div>
  );
}
`;

export const contentIcons = { code, scope: { BellIcon, PinIcon, UserIcon } };
