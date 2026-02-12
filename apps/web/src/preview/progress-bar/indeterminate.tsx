const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarIndeterminate() {
  return (
    <div className="space-y-4">
      <ProgressBar isIndeterminate label="Loading…" className="w-64" />
      <ProgressBar isIndeterminate isCircular label="Loading…" className="w-64" />
    </div>
  );
}
`;

export const indeterminate = { code };
