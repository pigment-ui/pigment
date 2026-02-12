const code = `
import { Button, Tooltip, TooltipTrigger } from "pigment-ui";

function TooltipHideArrow() {
  return (
    <div className="flex flex-wrap gap-4">
      <TooltipTrigger>
        <Button>With arrow</Button>
        <Tooltip>
          <p>This tooltip has an arrow pointing to the trigger</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Without arrow</Button>
        <Tooltip hideArrow>
          <p>This tooltip has no arrow</p>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
`;

export const hideArrow = { code };
