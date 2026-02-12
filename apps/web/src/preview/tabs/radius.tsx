const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsRadius() {
  return (
    <div className="space-y-4">
      <Tabs radius="none">
        <TabList aria-label="No radius">
          <Tab id="item-1">Tab 1</Tab>
          <Tab id="item-2">Tab 2</Tab>
          <Tab id="item-3">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-1">Content for Tab 1</TabPanel>
        <TabPanel id="item-2">Content for Tab 2</TabPanel>
        <TabPanel id="item-3">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs radius="sm">
        <TabList aria-label="Small radius">
          <Tab id="item-4">Tab 1</Tab>
          <Tab id="item-5">Tab 2</Tab>
          <Tab id="item-6">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-4">Content for Tab 1</TabPanel>
        <TabPanel id="item-5">Content for Tab 2</TabPanel>
        <TabPanel id="item-6">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs radius="md">
        <TabList aria-label="Medium radius">
          <Tab id="item-7">Tab 1</Tab>
          <Tab id="item-8">Tab 2</Tab>
          <Tab id="item-9">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-7">Content for Tab 1</TabPanel>
        <TabPanel id="item-8">Content for Tab 2</TabPanel>
        <TabPanel id="item-9">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs radius="lg">
        <TabList aria-label="Large radius">
          <Tab id="item-10">Tab 1</Tab>
          <Tab id="item-11">Tab 2</Tab>
          <Tab id="item-12">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-10">Content for Tab 1</TabPanel>
        <TabPanel id="item-11">Content for Tab 2</TabPanel>
        <TabPanel id="item-12">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs radius="full">
        <TabList aria-label="Full radius">
          <Tab id="item-13">Tab 1</Tab>
          <Tab id="item-14">Tab 2</Tab>
          <Tab id="item-15">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-13">Content for Tab 1</TabPanel>
        <TabPanel id="item-14">Content for Tab 2</TabPanel>
        <TabPanel id="item-15">Content for Tab 3</TabPanel>
      </Tabs>
    </div>
  );
}
`;

export const radius = { code };
