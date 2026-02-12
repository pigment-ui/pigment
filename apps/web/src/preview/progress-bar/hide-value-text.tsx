const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarHideValueText() {
  return (
    <div className="space-y-4">
      <ProgressBar label="With value text" value={60} className="w-64" />
      <ProgressBar label="Without value text" value={60} hideValueText className="w-64" />
      <ProgressBar isCircular label="Circular with value" value={60} className="w-64" />
      <ProgressBar isCircular label="Circular without value" value={60} hideValueText className="w-64" />
    </div>
  );
}
`;

export const hideValueText = { code };
