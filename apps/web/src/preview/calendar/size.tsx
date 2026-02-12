const code = `
import { Calendar } from "pigment-ui";

function CalendarSize() {
  return (
    <div className="space-y-4">
      <Calendar size="sm" aria-label="Small size" />
      <Calendar size="md" aria-label="Medium size" />
      <Calendar size="lg" aria-label="Large size" />
    </div>
  );
}
`;

export const size = { code };
