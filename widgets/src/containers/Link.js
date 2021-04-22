import React from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const link = ({ href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a onClick={onClick} href={href} className="item">
      {children}
    </a>
  );
};

export default link;
