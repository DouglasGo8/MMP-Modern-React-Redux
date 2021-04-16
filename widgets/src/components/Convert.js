import React, { useState, useEffect } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const convert = ({ language, text }) => {
  // console.log(language);

  const [translate, setTranslate] = useState("");

  useEffect(async () => {
    setTranslate("Apache Camel Rocks!!!");
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translate + " in " + language.label}</h1>
    </div>
  );
};

export default convert;
