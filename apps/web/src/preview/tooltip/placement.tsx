const code = `
import { Button, Tooltip, TooltipTrigger } from "pigment-ui";

function TooltipPlacement() {
  return (
    <div className="flex flex-wrap gap-4">
      <TooltipTrigger>
        <Button>Bottom</Button>
        <Tooltip placement="bottom">
          <p>Tooltip placed at the bottom</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Top</Button>
        <Tooltip placement="top">
          <p>Tooltip placed at the top</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Left</Button>
        <Tooltip placement="left">
          <p>Tooltip placed on the left</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Right</Button>
        <Tooltip placement="right">
          <p>Tooltip placed on the right</p>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
`;

export const placement = { code };
