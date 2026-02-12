const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarWithLabel() {
  return (
    <div className="space-y-4">
      <ProgressBar label="Upload progress" value={45} className="w-64" />
      <ProgressBar label="Download progress" value={80} className="w-64" />
      <ProgressBar label="Processing" value={100} className="w-64" />
      <ProgressBar isCircular label="Loading" value={60} className="w-64" />
    </div>
  );
}
`;

export const withLabel = { code };
