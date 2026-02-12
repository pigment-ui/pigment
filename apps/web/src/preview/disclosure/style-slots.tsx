const code = `
import { Disclosure, DisclosureGroup } from "pigment-ui";

function DisclosureStyleSlots() {
  return (
    <DisclosureGroup
      type="single"
      collapsible
      className="w-full"
      classNames={{
        base: "bg-default-100 rounded-lg",
        heading: "font-semibold",
        trigger: "hover:bg-default-200",
        title: "text-primary",
        panel: "bg-default-50",
        icon: "text-primary",
      }}
    >
      <Disclosure
        title="Custom styled Disclosure"
        description="This Disclosure has custom styles applied to various slots"
        value="item-1"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloribus dolorum, eligendi, error facere facilis modi nemo nisi
        odio perferendis, porro quae sed similique sit tempora tempore voluptate voluptatibus. Adipisci et provident recusandae.
      </Disclosure>
      <Disclosure
        title="Another styled item"
        description="Each item can have its own custom styles"
        value="item-2"
        classNames={{
          title: "text-success",
          icon: "text-success",
        }}
      >
        Adipisci, culpa cum deserunt dolorem ducimus eligendi expedita impedit libero maiores nemo odio quibusdam quidem, quis quo totam unde
        veritatis.
      </Disclosure>
    </DisclosureGroup>
  );
}
`;

export const styleSlots = { code };
