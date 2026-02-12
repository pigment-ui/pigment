const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarCircular() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <ProgressBar isCircular value={0} className="w-64" />
      <ProgressBar isCircular value={25} className="w-64" />
      <ProgressBar isCircular value={50} className="w-64" />
      <ProgressBar isCircular value={75} className="w-64" />
      <ProgressBar isCircular value={100} className="w-64" />
    </div>
  );
}
`;

export const circular = { code };
