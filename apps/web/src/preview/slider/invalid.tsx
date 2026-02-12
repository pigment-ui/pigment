const code = `
import { Slider } from "pigment-ui";

function SliderInvalid() {
  return (
    <Slider
      label="Volume"
      description="Please select a valid value"
      errorMessage="Value must be between 20 and 80"
      defaultValue={10}
      minValue={20}
      maxValue={80}
      isInvalid
      className="w-64"
    />
  );
}
`;

export const invalid = { code };
