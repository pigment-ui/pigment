const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarColor() {
  return (
    <div className="space-y-4">
      <ProgressBar color="default" label="Default" value={60} className="w-64" />
      <ProgressBar color="inverted" label="Inverted" value={60} className="w-64" />
      <ProgressBar color="primary" label="Primary" value={60} className="w-64" />
      <ProgressBar color="secondary" label="Secondary" value={60} className="w-64" />
      <ProgressBar color="info" label="Info" value={60} className="w-64" />
      <ProgressBar color="success" label="Success" value={60} className="w-64" />
      <ProgressBar color="warning" label="Warning" value={60} className="w-64" />
      <ProgressBar color="error" label="Error" value={60} className="w-64" />
    </div>
  );
}
`;

export const color = { code };
