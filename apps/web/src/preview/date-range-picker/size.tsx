const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerSize() {
  return (
    <div className="space-y-4">
      <DateRangePicker size="sm" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker size="md" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker size="lg" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
    </div>
  );
}
`;

export const size = { code };
