const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerRadius() {
  return (
    <div className="space-y-4">
      <DateRangePicker radius="none" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker radius="sm" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker radius="md" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker radius="lg" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker radius="full" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
    </div>
  );
}
`;

export const radius = { code };
