const code = `
import { Chip } from "pigment-ui";

function ChipRadius() {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip radius="none">None</Chip>
      <Chip radius="sm">Small</Chip>
      <Chip radius="md">Medium</Chip>
      <Chip radius="lg">Large</Chip>
      <Chip radius="full">Full</Chip>
    </div>
  );
}
`;

export const radius = { code };
