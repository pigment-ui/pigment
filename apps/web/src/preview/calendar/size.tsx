const code = `
import { Calendar } from "pigment-ui";

function CalendarSize() {
  return (
    <div className="flex flex-col gap-6">
      <Calendar size="sm" aria-label="Small calendar" />
      <Calendar size="md" aria-label="Medium calendar" />
      <Calendar size="lg" aria-label="Large calendar" />
    </div>
  );
}
`;

export const size = { code };
