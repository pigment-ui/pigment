const code = `
import { DatePicker } from "pigment-ui";
import { parseDate } from "@internationalized/date";

function DatePickerValidation() {
  return (
    <div className="space-y-4">
      <DatePicker
        label="Appointment date"
        description="Date must be in the future"
        errorMessage={(validation) => {
          if (validation.validationDetails.valueMissing) {
            return "Please select a date";
          }
          if (validation.validationDetails.rangeUnderflow) {
            return "Date must be in the future";
          }
          return "Invalid date";
        }}
        minValue={parseDate("2024-01-01")}
        isRequired
        className="w-64"
      />
    </div>
  );
}
`;

export const validation = { code };
