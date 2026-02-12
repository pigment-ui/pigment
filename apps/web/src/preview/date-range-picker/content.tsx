import { PinIcon, UserIcon } from "lucide-react";

const code = `
import { DateRangePicker } from "pigment-ui";
import { PinIcon, UserIcon } from "lucide-react";

function DateRangePickerContent() {
  return (
    <div className="space-y-4">
      <DateRangePicker startContent={<UserIcon />} label="Appointment date range" description="With start icon" className="w-96" />
      <DateRangePicker endContent={<PinIcon />} label="Appointment date range" description="With end icon" className="w-96" />
      <DateRangePicker startContent={<UserIcon />} endContent={<PinIcon />} label="Appointment date range" description="With both icons" className="w-96" />
    </div>
  );
}
`;

export const content = { code, scope: { PinIcon, UserIcon } };
