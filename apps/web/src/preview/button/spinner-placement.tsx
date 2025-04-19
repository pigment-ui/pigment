const code = `
import { Button } from "pigment-ui";

function ButtonSpinnerPlacement() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isLoading spinnerPlacement="start" variant="solid">
        Loading
      </Button>
      <Button isLoading spinnerPlacement="center" variant="solid">
        Loading
      </Button>
      <Button isLoading spinnerPlacement="end" variant="solid">
        Loading
      </Button>
    </div>
  );
}
`;

export const spinnerPlacement = { code };
