const code = `
import { Button } from "pigment-ui";

function ButtonSize() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="sm">Click me</Button>
      <Button size="md">Click me</Button>
      <Button size="lg">Click me</Button>
    </div>
  );
}
`;

export const size = { code };
