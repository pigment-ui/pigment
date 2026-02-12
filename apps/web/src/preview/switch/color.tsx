const code = `
import { Switch } from "pigment-ui";

function SwitchColor() {
  return (
    <div className="space-y-4">
      <Switch color="default" defaultSelected>Default</Switch>
      <Switch color="inverted" defaultSelected>Inverted</Switch>
      <Switch color="primary" defaultSelected>Primary</Switch>
      <Switch color="secondary" defaultSelected>Secondary</Switch>
      <Switch color="info" defaultSelected>Info</Switch>
      <Switch color="success" defaultSelected>Success</Switch>
      <Switch color="warning" defaultSelected>Warning</Switch>
      <Switch color="error" defaultSelected>Error</Switch>
    </div>
  );
}
`;

export const color = { code };
