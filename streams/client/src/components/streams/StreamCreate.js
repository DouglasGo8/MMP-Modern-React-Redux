import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../actions";
import StreamForm from "./StreamForm";

/**
 * @author dbatista
 */
class StreamCreate extends Component {
  /**
   *
   * @param {*} formValues
   */
  onSubmit = (formValues) => {
  
    this.props.createStream(formValues);
  };
  /**
   *
   * @returns
   */
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

/**
 * Redux Connect
 */
export default connect(null, { createStream })(StreamCreate);

/*export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);*/
