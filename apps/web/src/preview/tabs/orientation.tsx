const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsOrientation() {
  return (
    <div className="flex gap-8">
      <Tabs orientation="horizontal">
        <TabList aria-label="Horizontal tabs">
          <Tab id="item-1">Tab 1</Tab>
          <Tab id="item-2">Tab 2</Tab>
          <Tab id="item-3">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-1">Content for Tab 1</TabPanel>
        <TabPanel id="item-2">Content for Tab 2</TabPanel>
        <TabPanel id="item-3">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs orientation="vertical">
        <TabList aria-label="Vertical tabs">
          <Tab id="item-4">Tab 1</Tab>
          <Tab id="item-5">Tab 2</Tab>
          <Tab id="item-6">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-4">Content for Tab 1</TabPanel>
        <TabPanel id="item-5">Content for Tab 2</TabPanel>
        <TabPanel id="item-6">Content for Tab 3</TabPanel>
      </Tabs>
    </div>
  );
}
`;

export const orientation = { code };
