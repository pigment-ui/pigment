const code = `
import { DatePicker } from "pigment-ui";

function DatePickerDisabled() {
  return (
    <div className="space-y-4">
      <DatePicker isDisabled label="Appointment date" description="This field is disabled" className="w-64" />
      <DatePicker isDisabled defaultValue="2024-01-15" label="Appointment date" description="Disabled with value" className="w-64" />
    </div>
  );
}
`;

export const disabled = { code };
