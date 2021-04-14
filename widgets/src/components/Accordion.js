import React, { Fragment, useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const accordion = ({ items }) => {
  /**
   * activeIndex -> piece of State
   * setActiveIndex -> function to Change this piece of State
   * null -> initial value for this piece of state
   */
  const [activeIndex, setActiveIndex] = useState(null);
  //
  const onTitleClick = async (index) => {
    setActiveIndex(index);
  };
  //
  const renderedItems = items.map((item, _i) => {
    const active = _i === activeIndex ? "active" : "";
    //console.log(active);
    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(_i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  //
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default accordion;
