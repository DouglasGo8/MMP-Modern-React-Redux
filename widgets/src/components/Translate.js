import React, { Fragment, useState } from "react";
import DropDown from "./Dropdown";

import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

/**
 *
 * @returns
 */
const translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <DropDown
        label="Select a Language"
        selected={language}
        onSelectChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </Fragment>
  );
};

export default translate;
