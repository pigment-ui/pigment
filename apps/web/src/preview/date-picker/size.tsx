const code = `
import { DatePicker } from "pigment-ui";

function DatePickerSize() {
  return (
    <div className="space-y-4">
      <DatePicker size="sm" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker size="md" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker size="lg" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
    </div>
  );
}
`;

export const size = { code };
