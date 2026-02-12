const code = `
import { Slider } from "pigment-ui";

function SliderDisabled() {
  return (
    <div className="space-y-4">
      <Slider isDisabled label="Disabled" defaultValue={50} className="w-64" />
      <Slider isDisabled label="Disabled with value" defaultValue={75} className="w-64" />
    </div>
  );
}
`;

export const disabled = { code };
