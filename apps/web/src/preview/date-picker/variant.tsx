const code = `
import { DatePicker } from "pigment-ui";

function DatePickerVariant() {
  return (
    <div className="space-y-4">
      <DatePicker variant="solid" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="soft" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="light" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="bordered" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="ghost" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="faded" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="card" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="gradient" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="animated" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker variant="shadow" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
    </div>
  );
}
`;

export const variant = { code };
