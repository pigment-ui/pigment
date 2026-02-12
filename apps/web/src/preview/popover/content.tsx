import { UserIcon } from "lucide-react";

const code = `
import { Button, Popover, PopoverTrigger } from "pigment-ui";
import { UserIcon } from "lucide-react";

function PopoverContent() {
  return (
    <div className="flex flex-wrap gap-4">
      <PopoverTrigger>
        <Button>Simple text</Button>
        <Popover>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos?</p>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>With heading</Button>
        <Popover>
          <div className="space-y-2">
            <h3 className="font-semibold">Popover Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos?</p>
          </div>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>With icon</Button>
        <Popover>
          <div className="flex items-center gap-2">
            <UserIcon className="size-5" />
            <p>Content with icon</p>
          </div>
        </Popover>
      </PopoverTrigger>

      <PopoverTrigger>
        <Button>Long content</Button>
        <Popover className="max-w-xs">
          <div className="space-y-2">
            <h3 className="font-semibold">Long Content Example</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Molestias, quos?
            </p>
            <p>This popover contains multiple paragraphs of content to demonstrate how it handles longer text.</p>
          </div>
        </Popover>
      </PopoverTrigger>
    </div>
  );
}
`;

export const content = { code, scope: { UserIcon } };
