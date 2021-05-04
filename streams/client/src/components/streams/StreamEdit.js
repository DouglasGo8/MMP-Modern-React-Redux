import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams, editStream } from "../actions";
import StreamForm from "./StreamForm";

/**
 * @author dbatista
 */
class StreamEdit extends Component {
  componentDidMount = async () => {
    this.props.fetchStreams(this.props.match.params.id);
  };

  onSubmit = (formValues) => {
    const _id = this.props.match.params.id;
    //console.log(this.props.stream)
    this.props.editStream(_id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

/**
 *
 * @param {*} state
 * @param {*} ownProps
 * @returns
 */
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStreams, editStream })(
  StreamEdit
);
