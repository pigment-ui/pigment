const code = `
import { ProgressBar } from "pigment-ui";

function ProgressBarStyleSlots() {
  return (
    <div className="space-y-4">
      <ProgressBar
        label="Custom styled"
        value={60}
        className="w-64"
        classNames={{
          base: "p-4 bg-default-100 rounded-lg",
          label: "text-primary font-bold",
          valueText: "text-success",
          track: "bg-default-200",
          filler: "bg-gradient-to-r from-primary to-secondary",
        }}
      />
      <ProgressBar
        isCircular
        label="Custom circular"
        value={60}
        className="w-64"
        classNames={{
          label: "text-primary font-semibold",
          valueText: "text-primary font-bold",
        }}
      />
    </div>
  );
}
`;

export const styleSlots = { code };
