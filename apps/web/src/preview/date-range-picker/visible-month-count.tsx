const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerVisibleMonthCount() {
  return (
    <div className="space-y-4">
      <DateRangePicker visibleMonthCount={1} label="Appointment date range" description="Single month view" className="w-96" />
      <DateRangePicker visibleMonthCount={2} label="Appointment date range" description="Two months view" className="w-96" />
      <DateRangePicker visibleMonthCount={3} label="Appointment date range" description="Three months view" className="w-96" />
    </div>
  );
}
`;

export const visibleMonthCount = { code };
