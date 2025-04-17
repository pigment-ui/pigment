const code = `
import { Button } from "pigment-ui";

function ButtonSize() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="sm">Click me (sm)</Button>
      <Button size="md">Click me (md)</Button>
      <Button size="lg">Click me (lg)</Button>
    </div>
  );
}
`;

export const size = { code };
