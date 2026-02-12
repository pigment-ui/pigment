import { MinusIcon, PlusIcon } from "lucide-react";

const code = `
import { Slider } from "pigment-ui";
import { MinusIcon, PlusIcon } from "lucide-react";

function SliderContent() {
  return (
    <div className="space-y-4">
      <Slider startContent={<MinusIcon />} label="With start icon" defaultValue={50} className="w-64" />
      <Slider endContent={<PlusIcon />} label="With end icon" defaultValue={50} className="w-64" />
      <Slider startContent={<MinusIcon />} endContent={<PlusIcon />} label="With both icons" defaultValue={50} className="w-64" />
    </div>
  );
}
`;

export const content = { code, scope: { MinusIcon, PlusIcon } };
