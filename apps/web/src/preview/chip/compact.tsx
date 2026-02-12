const code = `
import { Chip } from "pigment-ui";

function ChipCompact() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Chip size="sm">Small</Chip>
        <Chip size="sm" isCompact>Small Compact</Chip>
      </div>
      <div className="flex flex-wrap gap-4">
        <Chip size="md">Medium</Chip>
        <Chip size="md" isCompact>Medium Compact</Chip>
      </div>
      <div className="flex flex-wrap gap-4">
        <Chip size="lg">Large</Chip>
        <Chip size="lg" isCompact>Large Compact</Chip>
      </div>
    </div>
  );
}
`;

export const compact = { code };
