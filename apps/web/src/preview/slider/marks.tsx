const code = `
import { Slider } from "pigment-ui";

function SliderMarks() {
  return (
    <div className="space-y-4">
      <Slider
        label="With marks"
        defaultValue={50}
        minValue={0}
        maxValue={100}
        marks={[
          { value: 0, label: "0" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 75, label: "75" },
          { value: 100, label: "100" },
        ]}
        className="w-64"
      />
      <Slider
        label="Custom marks"
        defaultValue={30}
        minValue={0}
        maxValue={100}
        marks={[
          { value: 0, label: "Min" },
          { value: 50, label: "Mid" },
          { value: 100, label: "Max" },
        ]}
        className="w-64"
      />
    </div>
  );
}
`;

export const marks = { code };
