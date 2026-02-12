const code = `
import { Slider } from "pigment-ui";

function SliderOrientation() {
  return (
    <div className="flex gap-8 items-center">
      <Slider orientation="horizontal" label="Horizontal" defaultValue={50} className="w-64" />
      <Slider orientation="vertical" label="Vertical" defaultValue={50} className="h-64" />
    </div>
  );
}
`;

export const orientation = { code };
