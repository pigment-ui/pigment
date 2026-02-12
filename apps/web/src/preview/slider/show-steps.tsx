const code = `
import { Slider } from "pigment-ui";

function SliderShowSteps() {
  return (
    <div className="space-y-4">
      <Slider label="Without steps" defaultValue={50} minValue={0} maxValue={100} step={10} className="w-64" />
      <Slider label="With steps" defaultValue={50} minValue={0} maxValue={100} step={10} showSteps className="w-64" />
    </div>
  );
}
`;

export const showSteps = { code };
