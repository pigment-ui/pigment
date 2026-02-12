const code = `
import { DatePicker } from "pigment-ui";

function DatePickerRadius() {
  return (
    <div className="space-y-4">
      <DatePicker radius="none" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker radius="sm" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker radius="md" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker radius="lg" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker radius="full" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
    </div>
  );
}
`;

export const radius = { code };
