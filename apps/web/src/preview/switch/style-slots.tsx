const code = `
import { Switch } from "pigment-ui";

function SwitchStyleSlots() {
  return (
    <div className="space-y-4">
      <Switch
        defaultSelected
        classNames={{
          base: "bg-gradient-to-r from-primary to-secondary",
          thumb: "bg-white shadow-lg",
          content: "text-primary font-bold",
        }}
      >
        Custom styled
      </Switch>
      <Switch
        defaultSelected
        classNames={{
          base: "bg-success",
          thumb: "bg-white border-2 border-success",
          wrapper: "gap-4",
        }}
      >
        Another style
      </Switch>
    </div>
  );
}
`;

export const styleSlots = { code };
