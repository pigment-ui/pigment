const code = `
import { Calendar } from "pigment-ui";

function CalendarStyleSlots() {
  return (
    <Calendar
      aria-label="Custom styled calendar"
      classNames={{
        wrapper: "border-2 border-primary rounded-lg p-2",
        calendarWrapper: "bg-default-50 rounded-lg",
        header: "bg-primary-100 p-2 rounded",
        heading: "text-primary font-bold",
        button: "bg-primary text-white hover:bg-primary-600",
        grid: "border-primary",
        base: "hover:bg-primary-50",
      }}
    />
  );
}
`;

export const styleSlots = { code };
