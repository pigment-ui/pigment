const code = `
import { Calendar } from "pigment-ui";

function CalendarVisibleMonthCount() {
  return (
    <div className="space-y-4">
      <Calendar visibleMonthCount={1} aria-label="Single month" />
      <Calendar visibleMonthCount={2} aria-label="Two months" />
      <Calendar visibleMonthCount={3} aria-label="Three months" />
    </div>
  );
}
`;

export const visibleMonthCount = { code };
