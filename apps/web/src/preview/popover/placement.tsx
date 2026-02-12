const code = `
import { Button, Popover, PopoverTrigger } from "pigment-ui";

function PopoverPlacement() {
  return (
    <div className="flex flex-wrap gap-4">
      <PopoverTrigger>
        <Button>Bottom</Button>
        <Popover placement="bottom">
          <p>Popover placed at the bottom</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Top</Button>
        <Popover placement="top">
          <p>Popover placed at the top</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Left</Button>
        <Popover placement="left">
          <p>Popover placed on the left</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Right</Button>
        <Popover placement="right">
          <p>Popover placed on the right</p>
        </Popover>
      </PopoverTrigger>
    </div>
  );
}
`;

export const placement = { code };
