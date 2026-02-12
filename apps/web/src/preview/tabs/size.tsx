const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsSize() {
  return (
    <div className="space-y-4">
      <Tabs size="sm">
        <TabList aria-label="Small size">
          <Tab id="item-1">Tab 1</Tab>
          <Tab id="item-2">Tab 2</Tab>
          <Tab id="item-3">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-1">Content for Tab 1</TabPanel>
        <TabPanel id="item-2">Content for Tab 2</TabPanel>
        <TabPanel id="item-3">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs size="md">
        <TabList aria-label="Medium size">
          <Tab id="item-4">Tab 1</Tab>
          <Tab id="item-5">Tab 2</Tab>
          <Tab id="item-6">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-4">Content for Tab 1</TabPanel>
        <TabPanel id="item-5">Content for Tab 2</TabPanel>
        <TabPanel id="item-6">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs size="lg">
        <TabList aria-label="Large size">
          <Tab id="item-7">Tab 1</Tab>
          <Tab id="item-8">Tab 2</Tab>
          <Tab id="item-9">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-7">Content for Tab 1</TabPanel>
        <TabPanel id="item-8">Content for Tab 2</TabPanel>
        <TabPanel id="item-9">Content for Tab 3</TabPanel>
      </Tabs>
    </div>
  );
}
`;

export const size = { code };
