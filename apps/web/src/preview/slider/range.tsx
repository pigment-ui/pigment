const code = `
import { Slider } from "pigment-ui";

function SliderRange() {
  return (
    <div className="space-y-4">
      <Slider label="Single value" defaultValue={50} minValue={0} maxValue={100} className="w-64" />
      <Slider label="Range" defaultValue={[20, 80]} minValue={0} maxValue={100} className="w-64" />
      <Slider label="Custom range" defaultValue={30} minValue={10} maxValue={90} step={5} className="w-64" />
    </div>
  );
}
`;

export const range = { code };
