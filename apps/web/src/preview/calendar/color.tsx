const code = `
import { Calendar } from "pigment-ui";

function CalendarColor() {
  return (
    <div className="space-y-4">
      <Calendar color="default" aria-label="Default color" />
      <Calendar color="primary" aria-label="Primary color" />
      <Calendar color="secondary" aria-label="Secondary color" />
      <Calendar color="info" aria-label="Info color" />
      <Calendar color="success" aria-label="Success color" />
      <Calendar color="warning" aria-label="Warning color" />
      <Calendar color="error" aria-label="Error color" />
      <Calendar color="inverted" aria-label="Inverted color" />
    </div>
  );
}
`;

export const color = { code };
