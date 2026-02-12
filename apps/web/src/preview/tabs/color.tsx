const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";

function TabsColor() {
  return (
    <div className="space-y-4">
      <Tabs color="default">
        <TabList aria-label="Default color">
          <Tab id="item-1">Tab 1</Tab>
          <Tab id="item-2">Tab 2</Tab>
          <Tab id="item-3">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-1">Content for Tab 1</TabPanel>
        <TabPanel id="item-2">Content for Tab 2</TabPanel>
        <TabPanel id="item-3">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="inverted">
        <TabList aria-label="Inverted color">
          <Tab id="item-4">Tab 1</Tab>
          <Tab id="item-5">Tab 2</Tab>
          <Tab id="item-6">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-4">Content for Tab 1</TabPanel>
        <TabPanel id="item-5">Content for Tab 2</TabPanel>
        <TabPanel id="item-6">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="primary">
        <TabList aria-label="Primary color">
          <Tab id="item-7">Tab 1</Tab>
          <Tab id="item-8">Tab 2</Tab>
          <Tab id="item-9">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-7">Content for Tab 1</TabPanel>
        <TabPanel id="item-8">Content for Tab 2</TabPanel>
        <TabPanel id="item-9">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="secondary">
        <TabList aria-label="Secondary color">
          <Tab id="item-10">Tab 1</Tab>
          <Tab id="item-11">Tab 2</Tab>
          <Tab id="item-12">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-10">Content for Tab 1</TabPanel>
        <TabPanel id="item-11">Content for Tab 2</TabPanel>
        <TabPanel id="item-12">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="info">
        <TabList aria-label="Info color">
          <Tab id="item-13">Tab 1</Tab>
          <Tab id="item-14">Tab 2</Tab>
          <Tab id="item-15">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-13">Content for Tab 1</TabPanel>
        <TabPanel id="item-14">Content for Tab 2</TabPanel>
        <TabPanel id="item-15">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="success">
        <TabList aria-label="Success color">
          <Tab id="item-16">Tab 1</Tab>
          <Tab id="item-17">Tab 2</Tab>
          <Tab id="item-18">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-16">Content for Tab 1</TabPanel>
        <TabPanel id="item-17">Content for Tab 2</TabPanel>
        <TabPanel id="item-18">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="warning">
        <TabList aria-label="Warning color">
          <Tab id="item-19">Tab 1</Tab>
          <Tab id="item-20">Tab 2</Tab>
          <Tab id="item-21">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-19">Content for Tab 1</TabPanel>
        <TabPanel id="item-20">Content for Tab 2</TabPanel>
        <TabPanel id="item-21">Content for Tab 3</TabPanel>
      </Tabs>

      <Tabs color="error">
        <TabList aria-label="Error color">
          <Tab id="item-22">Tab 1</Tab>
          <Tab id="item-23">Tab 2</Tab>
          <Tab id="item-24">Tab 3</Tab>
        </TabList>
        <TabPanel id="item-22">Content for Tab 1</TabPanel>
        <TabPanel id="item-23">Content for Tab 2</TabPanel>
        <TabPanel id="item-24">Content for Tab 3</TabPanel>
      </Tabs>
    </div>
  );
}
`;

export const color = { code };
