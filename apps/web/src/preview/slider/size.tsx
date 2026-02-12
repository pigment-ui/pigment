const code = `
import { Slider } from "pigment-ui";

function SliderSize() {
  return (
    <div className="space-y-4">
      <Slider size="sm" label="Small" defaultValue={50} className="w-64" />
      <Slider size="md" label="Medium" defaultValue={50} className="w-64" />
      <Slider size="lg" label="Large" defaultValue={50} className="w-64" />
    </div>
  );
}
`;

export const size = { code };
