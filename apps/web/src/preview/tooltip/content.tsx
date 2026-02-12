import { UserIcon } from "lucide-react";

const code = `
import { Button, Tooltip, TooltipTrigger } from "pigment-ui";
import { UserIcon } from "lucide-react";

function TooltipContent() {
  return (
    <div className="flex flex-wrap gap-4">
      <TooltipTrigger>
        <Button>Simple text</Button>
        <Tooltip>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos?</p>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>With heading</Button>
        <Tooltip>
          <div className="space-y-2">
            <h3 className="font-semibold">Tooltip Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos?</p>
          </div>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>With icon</Button>
        <Tooltip>
          <div className="flex items-center gap-2">
            <UserIcon className="size-5" />
            <p>Content with icon</p>
          </div>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button>Long content</Button>
        <Tooltip className="max-w-xs">
          <div className="space-y-2">
            <h3 className="font-semibold">Long Content Example</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quos? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Molestias, quos?
            </p>
            <p>This tooltip contains multiple paragraphs of content to demonstrate how it handles longer text.</p>
          </div>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
`;

export const content = { code, scope: { UserIcon } };
