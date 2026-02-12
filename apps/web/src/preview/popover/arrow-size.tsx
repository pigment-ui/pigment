const code = `
import { Button, Popover, PopoverTrigger } from "pigment-ui";

function PopoverArrowSize() {
  return (
    <div className="flex flex-wrap gap-4">
      <PopoverTrigger>
        <Button>Small arrow</Button>
        <Popover arrowSize={12}>
          <p>Popover with small arrow (12px)</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Default arrow</Button>
        <Popover arrowSize={16}>
          <p>Popover with default arrow (16px)</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Large arrow</Button>
        <Popover arrowSize={20}>
          <p>Popover with large arrow (20px)</p>
        </Popover>
      </PopoverTrigger>
    </div>
  );
}
`;

export const arrowSize = { code };
