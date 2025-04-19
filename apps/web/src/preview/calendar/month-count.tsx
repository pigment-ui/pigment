const code = `
import { Calendar } from "pigment-ui";

function CalendarVisibleMonthCount() {
  return (
    <div className="flex flex-col gap-6">
      <Calendar visibleMonthCount={1} aria-label="1 month view" />
      <Calendar visibleMonthCount={2} aria-label="2 month view" />
      <Calendar visibleMonthCount={3} aria-label="3 month view" />
    </div>
  );
}
`;

export const visibleMonthCount = { code };
