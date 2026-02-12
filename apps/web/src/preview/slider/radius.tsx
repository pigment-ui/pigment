const code = `
import { Slider } from "pigment-ui";

function SliderRadius() {
  return (
    <div className="space-y-4">
      <Slider radius="none" label="None" defaultValue={50} className="w-64" />
      <Slider radius="sm" label="Small" defaultValue={50} className="w-64" />
      <Slider radius="md" label="Medium" defaultValue={50} className="w-64" />
      <Slider radius="lg" label="Large" defaultValue={50} className="w-64" />
      <Slider radius="full" label="Full" defaultValue={50} className="w-64" />
    </div>
  );
}
`;

export const radius = { code };
