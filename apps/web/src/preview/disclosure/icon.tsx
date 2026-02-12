import { ChevronUp, Plus } from "lucide-react";

const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";
import { ChevronUp, Plus } from "lucide-react";

function DisclosureIcon() {
  return (
    <div className="space-y-4 w-full">
      <DisclosureGroup type="single" collapsible className="w-full">
        <Disclosure title="Default icon" value="item-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Custom icon" icon={<Plus />} value="item-2">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
        <Disclosure title="Another custom icon" icon={<ChevronUp />} value="item-3">
          A accusamus ad adipisci consequuntur cumque, expedita id illum ipsum non omnis porro quisquam saepe, sapiente, tempore veniam!
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
}
`;

export const icon = { code, scope: { ChevronUp, Plus } };
