import React, { useState } from "react";

import "./App.css";

import Search from "./components/Search";
import DropDown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Translate from "./components/Translate";
import Route from "./containers/Route";
import Header from "./containers/Header";

const items = [
  {
    title: "What is React?",
    content: "What front-end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "React Js is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React JS by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },

  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

/**
 *
 * @returns
 */
const app = () => {
  const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default app;
