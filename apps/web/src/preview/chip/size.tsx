const code = `
import { Chip } from "pigment-ui";

function ChipSize() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  );
}
`;

export const size = { code };
