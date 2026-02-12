const code = `
import { Button, Popover, PopoverTrigger } from "pigment-ui";

function PopoverHideArrow() {
  return (
    <div className="flex flex-wrap gap-4">
      <PopoverTrigger>
        <Button>With arrow</Button>
        <Popover>
          <p>This popover has an arrow pointing to the trigger</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Without arrow</Button>
        <Popover hideArrow>
          <p>This popover has no arrow</p>
        </Popover>
      </PopoverTrigger>
    </div>
  );
}
`;

export const hideArrow = { code };
