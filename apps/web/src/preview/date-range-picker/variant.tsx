const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerVariant() {
  return (
    <div className="space-y-4">
      <DateRangePicker variant="solid" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="soft" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="light" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="bordered" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="ghost" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="faded" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="card" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="gradient" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="animated" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
      <DateRangePicker variant="shadow" label="Appointment date range" description="Lorem ipsum dolor sit amet." className="w-96" />
    </div>
  );
}
`;

export const variant = { code };
