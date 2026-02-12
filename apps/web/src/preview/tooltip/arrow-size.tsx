const code = `
import { Button, Tooltip, TooltipTrigger } from "pigment-ui";

function TooltipArrowSize() {
  return (
    <div className="flex flex-wrap gap-4">
      <TooltipTrigger>
        <Button>Small arrow</Button>
        <Tooltip arrowSize={12}>
          <p>Tooltip with small arrow (12px)</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Default arrow</Button>
        <Tooltip arrowSize={16}>
          <p>Tooltip with default arrow (16px)</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Large arrow</Button>
        <Tooltip arrowSize={20}>
          <p>Tooltip with large arrow (20px)</p>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
`;

export const arrowSize = { code };
