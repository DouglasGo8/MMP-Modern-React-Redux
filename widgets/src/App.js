import React from "react";

import "./App.css";

import Search from "./components/Search";
import Accordion from "./components/Accordion";

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

/**
 *
 * @returns
 */
const app = () => {
  return (
    <div className="ui container">
     <Search/>
    </div>
  );
};

export default app;
