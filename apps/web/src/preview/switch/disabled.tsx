const code = `
import { Switch } from "pigment-ui";

function SwitchDisabled() {
  return (
    <div className="space-y-4">
      <Switch isDisabled>Disabled (unchecked)</Switch>
      <Switch isDisabled defaultSelected>Disabled (checked)</Switch>
    </div>
  );
}
`;

export const disabled = { code };
