const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";

function DisclosureColor() {
  return (
    <div className="space-y-4 w-full">
      <DisclosureGroup color="default" variant="soft" className="w-full">
        <Disclosure title="Default color" value="item-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Default color" value="item-2">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="primary" variant="soft" className="w-full">
        <Disclosure title="Primary color" value="item-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Primary color" value="item-4">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="secondary" variant="soft" className="w-full">
        <Disclosure title="Secondary color" value="item-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Secondary color" value="item-6">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="info" variant="soft" className="w-full">
        <Disclosure title="Info color" value="item-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Info color" value="item-8">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="success" variant="soft" className="w-full">
        <Disclosure title="Success color" value="item-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Success color" value="item-10">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="warning" variant="soft" className="w-full">
        <Disclosure title="Warning color" value="item-11">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Warning color" value="item-12">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="error" variant="soft" className="w-full">
        <Disclosure title="Error color" value="item-13">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Error color" value="item-14">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup color="inverted" variant="soft" className="w-full">
        <Disclosure title="Inverted color" value="item-15">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Inverted color" value="item-16">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
}
`;

export const color = { code };
