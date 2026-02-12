const code = `
import { Calendar } from "pigment-ui";

function CalendarInvalid() {
  return (
    <Calendar
      label="Appointment date"
      errorMessage="This date is not available"
      isInvalid
      aria-label="Appointment date"
    />
  );
}
`;

export const invalid = { code };
