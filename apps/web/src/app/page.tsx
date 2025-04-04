"use client";

import { ComponentBox } from "#/components";
import { parseDate } from "@internationalized/date";
import { BellIcon } from "lucide-react";
import {
  Badge,
  Button,
  Checkbox,
  Chip,
  ColorField,
  ComboBox,
  ComboBoxItem,
  DateField,
  DatePicker,
  NumberField,
  Pagination,
  ProgressBar,
  Radio,
  RadioGroup,
  SearchField,
  Select,
  SelectItem,
  Slider,
  Spinner,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tag,
  TagGroup,
  TextArea,
  TextField,
} from "pigment-ui";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(2);

  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-3 max-lg:mx-auto max-lg:max-w-[600px] max-lg:grid-cols-1">
          <ComponentBox id="badge">
            <Badge content="99+">
              <BellIcon className="size-8" />
            </Badge>
          </ComponentBox>

          <ComponentBox id="button">
            <Button>Click Me</Button>
          </ComponentBox>

          <ComponentBox id="checkbox">
            <Checkbox defaultSelected>Unsubscribe</Checkbox>
          </ComponentBox>

          <ComponentBox id="chip">
            <Chip>Lorem ipsum</Chip>
          </ComponentBox>

          <ComponentBox id="color-field">
            <ColorField label="Color" defaultValue="#ff2222" description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="combo-box">
            <ComboBox label="Favorite Animal" defaultSelectedKey="Aardvark" description="Lorem ipsum dolor sit amet." className="w-64">
              <ComboBoxItem>Aardvark</ComboBoxItem>
              <ComboBoxItem>Cat</ComboBoxItem>
              <ComboBoxItem>Dog</ComboBoxItem>
            </ComboBox>
          </ComponentBox>

          <ComponentBox id="date-field">
            <DateField label="Birth date" defaultValue={parseDate("2003-04-08")} description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="date-field">
            <DatePicker label="Birth date" defaultValue={parseDate("2003-04-08")} description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="number-field">
            <NumberField label="Width" defaultValue={300} description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="pagination">
            <Pagination total={3} page={page} onChange={setPage} />
          </ComponentBox>

          <ComponentBox id="progress-bar">
            <ProgressBar label="Loading…" isIndeterminate className="w-64" />
          </ComponentBox>

          <ComponentBox id="radio-grouo">
            <RadioGroup label="Favorite sports" description="Lorem ipsum dolor sit amet." defaultValue="soccer">
              <Radio value="soccer">Soccer</Radio>
              <Radio value="baseball">Baseball</Radio>
            </RadioGroup>
          </ComponentBox>

          <ComponentBox id="search-field">
            <SearchField label="Search" defaultValue="Pigment UI" description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="select">
            <Select label="Favorite Animal" defaultSelectedKey="Aardvark" description="Lorem ipsum dolor sit amet." className="w-64">
              <SelectItem>Aardvark</SelectItem>
              <SelectItem>Cat</SelectItem>
              <SelectItem>Dog</SelectItem>
            </Select>
          </ComponentBox>

          <ComponentBox id="slider">
            <Slider label="Opacity" defaultValue={30} description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>

          <ComponentBox id="spinner">
            <Spinner />
          </ComponentBox>

          <ComponentBox id="switch">
            <Switch defaultSelected>Bluetooth</Switch>
          </ComponentBox>

          <ComponentBox id="tabs">
            <Tabs>
              <TabList aria-label="Lorem ipsum dolor sit amet">
                <Tab id="item-1">Tab 1</Tab>
                <Tab id="item-2">Tab 2</Tab>
                <Tab id="item-3">Tab 3</Tab>
              </TabList>
              <TabPanel id="item-1">Lorem ipsum dolor sit amet.</TabPanel>
              <TabPanel id="item-2">Consectetur adipisicing elit.</TabPanel>
              <TabPanel id="item-3">Eaque ex nam quasi.</TabPanel>
            </Tabs>
          </ComponentBox>

          <ComponentBox id="tag-group">
            <TagGroup label="Categories" description="Lorem ipsum dolor sit amet." selectionMode="multiple" defaultSelectedKeys={["Travel"]}>
              <Tag>News</Tag>
              <Tag>Travel</Tag>
              <Tag>Gaming</Tag>
            </TagGroup>
          </ComponentBox>

          <ComponentBox id="text-area">
            <TextArea
              label="Comment"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              description="Lorem ipsum dolor sit amet."
              rows={3}
              className="w-64"
            />
          </ComponentBox>

          <ComponentBox id="text-field">
            <TextField label="First Name" defaultValue="Rafig" description="Lorem ipsum dolor sit amet." className="w-64" />
          </ComponentBox>
        </div>
      </div>
    </main>
  );
}
