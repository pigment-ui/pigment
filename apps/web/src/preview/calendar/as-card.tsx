const code = `
import { Calendar } from "pigment-ui";

function CalendarAsCard() {
  return (
    <div className="space-y-4">
      <Calendar asCard={true} aria-label="As card" />
      <Calendar asCard={false} aria-label="Without card" />
    </div>
  );
}
`;

export const asCard = { code };
