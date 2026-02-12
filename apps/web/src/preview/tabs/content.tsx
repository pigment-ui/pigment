import { PinIcon, UserIcon } from "lucide-react";

const code = `
import { Tab, TabList, TabPanel, Tabs } from "pigment-ui";
import { PinIcon, UserIcon } from "lucide-react";

function TabsContent() {
  return (
    <Tabs>
      <TabList aria-label="Tabs with icons">
        <Tab id="item-1" startContent={<UserIcon />}>Tab 1</Tab>
        <Tab id="item-2" endContent={<PinIcon />}>Tab 2</Tab>
        <Tab id="item-3" startContent={<UserIcon />} endContent={<PinIcon />}>Tab 3</Tab>
      </TabList>
      <TabPanel id="item-1">Content for Tab 1</TabPanel>
      <TabPanel id="item-2">Content for Tab 2</TabPanel>
      <TabPanel id="item-3">Content for Tab 3</TabPanel>
    </Tabs>
  );
}
`;

export const content = { code, scope: { PinIcon, UserIcon } };
