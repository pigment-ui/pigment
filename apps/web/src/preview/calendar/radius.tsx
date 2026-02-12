const code = `
import { Calendar } from "pigment-ui";

function CalendarRadius() {
  return (
    <div className="space-y-4">
      <Calendar radius="none" aria-label="No radius" />
      <Calendar radius="sm" aria-label="Small radius" />
      <Calendar radius="md" aria-label="Medium radius" />
      <Calendar radius="lg" aria-label="Large radius" />
      <Calendar radius="full" aria-label="Full radius" />
    </div>
  );
}
`;

export const radius = { code };
