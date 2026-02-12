const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";

function DisclosureSize() {
  return (
    <div className="space-y-4 w-full">
      <DisclosureGroup size="sm" className="w-full">
        <Disclosure title="Small size" value="item-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Small size" value="item-2">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup size="md" className="w-full">
        <Disclosure title="Medium size" value="item-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Medium size" value="item-4">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup size="lg" className="w-full">
        <Disclosure title="Large size" value="item-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Large size" value="item-6">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
}
`;

export const size = { code };
