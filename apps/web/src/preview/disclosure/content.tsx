import { PinIcon, UserIcon } from "lucide-react";

const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";
import { PinIcon, UserIcon } from "lucide-react";

function DisclosureContent() {
  return (
    <DisclosureGroup type="single" collapsible className="w-full">
      <Disclosure title="With start content" startContent={<UserIcon />} value="item-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
        odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
      </Disclosure>
      <Disclosure title="With end content" endContent={<PinIcon />} value="item-2">
        Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
        veritatis.
      </Disclosure>
      <Disclosure title="With both" startContent={<UserIcon />} endContent={<PinIcon />} value="item-3">
        A accusamus ad adipisci consequuntur cumque, expedita id illum ipsum non omnis porro quisquam saepe, sapiente, tempore veniam!
      </Disclosure>
    </DisclosureGroup>
  );
}
`;

export const content = { code, scope: { PinIcon, UserIcon } };
