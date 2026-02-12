const code = `
import { DatePicker } from "pigment-ui";

function DatePickerVisibleMonthCount() {
  return (
    <div className="space-y-4">
      <DatePicker visibleMonthCount={1} label="Appointment date" description="Single month view" className="w-64" />
      <DatePicker visibleMonthCount={2} label="Appointment date" description="Two months view" className="w-64" />
      <DatePicker visibleMonthCount={3} label="Appointment date" description="Three months view" className="w-64" />
    </div>
  );
}
`;

export const visibleMonthCount = { code };
