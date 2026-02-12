const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";

function DisclosureVariant() {
  return (
    <div className="space-y-4 w-full">
      <DisclosureGroup variant="solid" className="w-full">
        <Disclosure title="Solid variant" value="item-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Solid variant" value="item-2">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="soft" className="w-full">
        <Disclosure title="Soft variant" value="item-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Soft variant" value="item-4">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="light" className="w-full">
        <Disclosure title="Light variant" value="item-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Light variant" value="item-6">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="bordered" className="w-full">
        <Disclosure title="Bordered variant" value="item-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Bordered variant" value="item-8">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="ghost" className="w-full">
        <Disclosure title="Ghost variant" value="item-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Ghost variant" value="item-10">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="faded" className="w-full">
        <Disclosure title="Faded variant" value="item-11">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Faded variant" value="item-12">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="card" className="w-full">
        <Disclosure title="Card variant" value="item-13">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Card variant" value="item-14">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="gradient" className="w-full">
        <Disclosure title="Gradient variant" value="item-15">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Gradient variant" value="item-16">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="animated" className="w-full">
        <Disclosure title="Animated variant" value="item-17">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Animated variant" value="item-18">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup variant="shadow" className="w-full">
        <Disclosure title="Shadow variant" value="item-19">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
          odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus.
        </Disclosure>
        <Disclosure title="Shadow variant" value="item-20">
          Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
          veritatis.
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
}
`;

export const variant = { code };
