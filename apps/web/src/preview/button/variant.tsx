const code = `
import { Button } from "pigment-ui";

function ButtonVariant() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="light">Light</Button>
      <Button variant="bordered">Bordered</Button>
      <Button variant="faded">Faded</Button>
    </div>
  );
}
`;

export const variant = { code };
