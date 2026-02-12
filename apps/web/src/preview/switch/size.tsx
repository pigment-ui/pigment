const code = `
import { Switch } from "pigment-ui";

function SwitchSize() {
  return (
    <div className="space-y-4">
      <Switch size="sm" defaultSelected>Small</Switch>
      <Switch size="md" defaultSelected>Medium</Switch>
      <Switch size="lg" defaultSelected>Large</Switch>
    </div>
  );
}
`;

export const size = { code };
