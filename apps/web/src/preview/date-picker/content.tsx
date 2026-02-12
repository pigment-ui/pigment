import { PinIcon, UserIcon } from "lucide-react";

const code = `
import { DatePicker } from "pigment-ui";
import { PinIcon, UserIcon } from "lucide-react";

function DatePickerContent() {
  return (
    <div className="space-y-4">
      <DatePicker startContent={<UserIcon />} label="Appointment date" description="With start icon" className="w-64" />
      <DatePicker endContent={<PinIcon />} label="Appointment date" description="With end icon" className="w-64" />
      <DatePicker startContent={<UserIcon />} endContent={<PinIcon />} label="Appointment date" description="With both icons" className="w-64" />
    </div>
  );
}
`;

export const content = { code, scope: { PinIcon, UserIcon } };
