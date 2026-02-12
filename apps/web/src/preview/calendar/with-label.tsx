const code = `
import { Calendar } from "pigment-ui";

function CalendarWithLabel() {
  return (
    <div className="space-y-4">
      <Calendar label="Appointment date" />
      <Calendar label="Event date" />
    </div>
  );
}
`;

export const withLabel = { code };
