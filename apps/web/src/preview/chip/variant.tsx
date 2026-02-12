const code = `
import { Chip } from "pigment-ui";

function ChipVariant() {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip variant="solid">Solid</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="light">Light</Chip>
      <Chip variant="bordered">Bordered</Chip>
      <Chip variant="ghost">Ghost</Chip>
      <Chip variant="faded">Faded</Chip>
      <Chip variant="card">Card</Chip>
      <Chip variant="gradient">Gradient</Chip>
      <Chip variant="animated">Animated</Chip>
      <Chip variant="shadow">Shadow</Chip>
    </div>
  );
}
`;

export const variant = { code };
