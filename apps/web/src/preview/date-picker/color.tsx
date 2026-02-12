const code = `
import { DatePicker } from "pigment-ui";

function DatePickerColor() {
  return (
    <div className="space-y-4">
      <DatePicker color="default" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="inverted" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="primary" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="secondary" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="info" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="success" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="warning" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
      <DatePicker color="error" label="Appointment date" description="Lorem ipsum dolor sit amet." className="w-64" />
    </div>
  );
}
`;

export const color = { code };
