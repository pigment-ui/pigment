const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerColor() {
  return (
    <div className="space-y-4">
      <DateRangePicker color="default" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="inverted" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="primary" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="secondary" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="info" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="success" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="warning" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker color="error" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
    </div>
  );
}
`;

export const color = { code };
