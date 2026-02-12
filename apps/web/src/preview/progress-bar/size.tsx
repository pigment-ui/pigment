const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarSize() {
  return (
    <div className="space-y-4">
      <ProgressBar size="sm" label="Small" value={60} className="w-64" />
      <ProgressBar size="md" label="Medium" value={60} className="w-64" />
      <ProgressBar size="lg" label="Large" value={60} className="w-64" />
    </div>
  );
}
`;

export const size = { code };
