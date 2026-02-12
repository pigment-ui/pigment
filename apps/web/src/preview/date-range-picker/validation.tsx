const code = `
import { DateRangePicker } from "pigment-ui";
import { parseDate } from "@internationalized/date";

function DateRangePickerValidation() {
  return (
    <div className="space-y-4">
      <DateRangePicker
        label="Appointment date range"
        description="Date range must be in the future"
        errorMessage={(validation) => {
          if (validation.validationDetails.valueMissing) {
            return "Please select a date range";
          }
          if (validation.validationDetails.rangeUnderflow) {
            return "Date range must be in the future";
          }
          return "Invalid date range";
        }}
        minValue={parseDate("2024-01-01")}
        isRequired
        className="w-96"
      />
    </div>
  );
}
`;

export const validation = { code };
