import React, { useState } from "react";

import "./App.css";

import Search from "./components/Search";
import DropDown from "./components/Dropdown";
import Accordion from "./components/Accordion";

/*const items = [
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
];*/

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
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <DropDown
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default app;
