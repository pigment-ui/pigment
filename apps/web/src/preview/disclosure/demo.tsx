const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";

function DisclosureDemo() {
  return (
    <DisclosureGroup type="single" collapsible className="w-full">
      <Disclosure value="item-1" title="Disclosure 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
        odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus. Adipisci et provident recusandae.
      </Disclosure>
      <Disclosure value="item-2" title="Disclosure 2">
        Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
        veritatis.
      </Disclosure>
      <Disclosure value="item-3" title="Disclosure 3">
        A accusamus ad adipisci consequuntur cumque, expedita id illum ipsum non omnis porro quisquam saepe, sapiente, tempore veniam! Accusamus
        alias atque consequatur cupiditate dolorem eius, hic ipsam laboriosam, modi perferendis quisquam quos sapiente totam veniam voluptate!
      </Disclosure>
    </DisclosureGroup>
  );
}
`;

export const demo = { code };
