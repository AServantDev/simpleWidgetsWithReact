import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library amon engineers",
  },
  {
    title: "How do you use React",
    content: "you use react by creating components",
  },
];

const options = [
  { label: "Green", color: "green" },
  { label: "The Purple", color: "purple" },
  { label: "Nice blue", color: "blue" },
];

export default () => {
  const [currentSelect, setSelect] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/List">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={currentSelect}
          onSelectChange={setSelect}
          label="Select a color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
