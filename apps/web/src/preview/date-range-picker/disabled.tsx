const code = `
import { DateRangePicker } from "pigment-ui";
import { parseDate } from "@internationalized/date";

function DateRangePickerDisabled() {
  return (
    <div className="space-y-4">
      <DateRangePicker isDisabled label="Appointment date range" description="This field is disabled" className="w-96" />
      <DateRangePicker
        isDisabled
        defaultValue={{ start: parseDate("2024-01-15"), end: parseDate("2024-01-20") }}
        label="Appointment date range"
        description="Disabled with value"
        className="w-96"
      />
    </div>
  );
}
`;

export const disabled = { code };
