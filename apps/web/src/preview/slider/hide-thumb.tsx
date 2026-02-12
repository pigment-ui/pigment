const code = `
import { Slider } from "pigment-ui";

function SliderHideThumb() {
  return (
    <div className="space-y-4">
      <Slider label="With thumb" defaultValue={50} className="w-64" />
      <Slider label="Without thumb" defaultValue={50} hideThumb className="w-64" />
    </div>
  );
}
`;

export const hideThumb = { code };
