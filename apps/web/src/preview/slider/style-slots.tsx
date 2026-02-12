const code = `
import { Slider } from "pigment-ui";

function SliderStyleSlots() {
  return (
    <div className="space-y-4">
      <Slider
        label="Custom styled"
        defaultValue={50}
        className="w-64"
        classNames={{
          base: "p-2 bg-default-100 rounded-lg",
          track: "bg-default-200",
          thumb: "bg-primary border-2 border-primary-foreground",
          filler: "bg-gradient-to-r from-primary to-secondary",
          label: "text-primary font-bold",
        }}
      />
      <Slider
        label="Another styled example"
        defaultValue={60}
        className="w-64"
        classNames={{
          track: "bg-success-200",
          thumb: "bg-success border-success-foreground",
          filler: "bg-success",
        }}
      />
    </div>
  );
}
`;

export const styleSlots = { code };
