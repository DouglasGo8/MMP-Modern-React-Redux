import React from "react";

const spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

spinner.defaultProps  = {
  message: 'Loading...',
}

export default spinner;
