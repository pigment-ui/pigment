const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsStyleSlots() {
  return (
    <Tabs
      classNames={{
        base: "bg-default-100 p-4 rounded-lg",
        list: "bg-primary-100 rounded-lg",
        panel: "bg-success-50 rounded-lg p-4",
      }}
    >
      <TabList aria-label="Custom styled tabs">
        <Tab id="item-1">Tab 1</Tab>
        <Tab id="item-2">Tab 2</Tab>
        <Tab id="item-3">Tab 3</Tab>
      </TabList>
      <TabPanel id="item-1">Content for Tab 1</TabPanel>
      <TabPanel id="item-2">Content for Tab 2</TabPanel>
      <TabPanel id="item-3">Content for Tab 3</TabPanel>
    </Tabs>
  );
}
`;

export const styleSlots = { code };
