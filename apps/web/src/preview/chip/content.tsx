import { PinIcon, UserIcon, XIcon } from "lucide-react";

const code = `
import { Chip } from "pigment-ui";
import { PinIcon, UserIcon, XIcon } from "lucide-react";

function ChipContent() {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip startContent={<UserIcon />}>With start icon</Chip>
      <Chip endContent={<XIcon />}>With end icon</Chip>
      <Chip startContent={<UserIcon />} endContent={<XIcon />}>With both icons</Chip>
      <Chip startContent={<PinIcon />} endContent={<XIcon />}>Pinned</Chip>
    </div>
  );
}
`;

export const content = { code, scope: { PinIcon, UserIcon, XIcon } };
