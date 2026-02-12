const code = `
import { Slider } from "pigment-ui";

function SliderColor() {
  return (
    <div className="space-y-4">
      <Slider color="default" label="Default" defaultValue={50} className="w-64" />
      <Slider color="inverted" label="Inverted" defaultValue={50} className="w-64" />
      <Slider color="primary" label="Primary" defaultValue={50} className="w-64" />
      <Slider color="secondary" label="Secondary" defaultValue={50} className="w-64" />
      <Slider color="info" label="Info" defaultValue={50} className="w-64" />
      <Slider color="success" label="Success" defaultValue={50} className="w-64" />
      <Slider color="warning" label="Warning" defaultValue={50} className="w-64" />
      <Slider color="error" label="Error" defaultValue={50} className="w-64" />
    </div>
  );
}
`;

export const color = { code };
