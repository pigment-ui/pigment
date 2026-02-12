const code = `
import { DateRangePicker } from "pigment-ui";

function DateRangePickerInvalid() {
  return (
    <DateRangePicker
      label="Appointment date range"
      description="Please select a valid date range"
      errorMessage="This date range is not available"
      isInvalid
      className="w-96"
    />
  );
}
`;

export const invalid = { code };
