import React, { useEffect, useRef, useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const dropdown = ({ label, options, selected, onSelectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); // mandatory position

  /**
   * cannot use async() annotation, or ...Listeners will not works
   */
  useEffect(() => {
    const onBodyClick = (event) => {
      //console.log("Click fired");
      //console.log(ref.current);
      //console.log(event.target);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectChange(option)} // callback with args
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dropdown;
