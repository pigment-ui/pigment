const code = `
import { Button } from "pigment-ui";

function ButtonRadius() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button radius="none">Click me (none)</Button>
      <Button radius="sm">Click me (sm)</Button>
      <Button radius="md">Click me (md)</Button>
      <Button radius="lg">Click me (lg)</Button>
      <Button radius="full">Click me (full)</Button>
    </div>
  );
}
`;

export const radius = { code };
