const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsVariant() {
  return (
    <div className="space-y-4">
      <Tabs variant="solid">
        <TabList aria-label="Solid variant">
          <Tab id="item-1">Tab 1</Tab>
          <Tab id="item-2">Tab 2</Tab>
          <Tab id="item-3">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-1">Content for Tab 1</TabPanel>
        <TabPanel id="item-2">Content for Tab 2</TabPanel>
        <TabPanel id="item-3">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="soft">
        <TabList aria-label="Soft variant">
          <Tab id="item-4">Tab 1</Tab>
          <Tab id="item-5">Tab 2</Tab>
          <Tab id="item-6">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-4">Content for Tab 1</TabPanel>
        <TabPanel id="item-5">Content for Tab 2</TabPanel>
        <TabPanel id="item-6">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="light">
        <TabList aria-label="Light variant">
          <Tab id="item-7">Tab 1</Tab>
          <Tab id="item-8">Tab 2</Tab>
          <Tab id="item-9">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-7">Content for Tab 1</TabPanel>
        <TabPanel id="item-8">Content for Tab 2</TabPanel>
        <TabPanel id="item-9">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="bordered">
        <TabList aria-label="Bordered variant">
          <Tab id="item-10">Tab 1</Tab>
          <Tab id="item-11">Tab 2</Tab>
          <Tab id="item-12">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-10">Content for Tab 1</TabPanel>
        <TabPanel id="item-11">Content for Tab 2</TabPanel>
        <TabPanel id="item-12">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="ghost">
        <TabList aria-label="Ghost variant">
          <Tab id="item-13">Tab 1</Tab>
          <Tab id="item-14">Tab 2</Tab>
          <Tab id="item-15">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-13">Content for Tab 1</TabPanel>
        <TabPanel id="item-14">Content for Tab 2</TabPanel>
        <TabPanel id="item-15">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="faded">
        <TabList aria-label="Faded variant">
          <Tab id="item-16">Tab 1</Tab>
          <Tab id="item-17">Tab 2</Tab>
          <Tab id="item-18">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-16">Content for Tab 1</TabPanel>
        <TabPanel id="item-17">Content for Tab 2</TabPanel>
        <TabPanel id="item-18">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="card">
        <TabList aria-label="Card variant">
          <Tab id="item-19">Tab 1</Tab>
          <Tab id="item-20">Tab 2</Tab>
          <Tab id="item-21">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-19">Content for Tab 1</TabPanel>
        <TabPanel id="item-20">Content for Tab 2</TabPanel>
        <TabPanel id="item-21">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="gradient">
        <TabList aria-label="Gradient variant">
          <Tab id="item-22">Tab 1</Tab>
          <Tab id="item-23">Tab 2</Tab>
          <Tab id="item-24">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-22">Content for Tab 1</TabPanel>
        <TabPanel id="item-23">Content for Tab 2</TabPanel>
        <TabPanel id="item-24">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="animated">
        <TabList aria-label="Animated variant">
          <Tab id="item-25">Tab 1</Tab>
          <Tab id="item-26">Tab 2</Tab>
          <Tab id="item-27">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-25">Content for Tab 1</TabPanel>
        <TabPanel id="item-26">Content for Tab 2</TabPanel>
        <TabPanel id="item-27">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs variant="shadow">
        <TabList aria-label="Shadow variant">
          <Tab id="item-28">Tab 1</Tab>
          <Tab id="item-29">Tab 2</Tab>
          <Tab id="item-30">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-28">Content for Tab 1</TabPanel>
        <TabPanel id="item-29">Content for Tab 2</TabPanel>
        <TabPanel id="item-30">Content for Tab 3</TabPanel>
      </Tabs>
    </div>
  );
}
`;

export const variant = { code };
