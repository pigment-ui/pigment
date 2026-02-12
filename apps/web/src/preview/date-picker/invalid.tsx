const code = `
import { DatePicker } from "pigment-ui";

function DatePickerInvalid() {
  return (
    <DatePicker
      label="Appointment date"
      description="Please select a valid date"
      errorMessage="This date is not available"
      isInvalid
      className="w-64"
    />
  );
}
`;

export const invalid = { code };
