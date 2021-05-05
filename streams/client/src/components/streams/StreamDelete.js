import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams, deleteStream } from "../actions";

import Modal from "../modal/Modal";
import history from "../../history";

/**
 *
 * @returns
 */
class StreamDelete extends Component {
  /**
   *
   */
  componentDidMount = async () => {
    this.props.fetchStreams(this.props.match.params.id);
  };
  /**
   *
   * @returns
   */
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <div>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </div>
    );
  };
  /**
   *
   * @returns
   */
  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want delete this stream?";
    }
    return `Are you sure you want delete this stream with title ${this.props.stream.title}`;
  };
  /**
   *
   * @returns
   */
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
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

/**
 *
 */
export default connect(mapStateToProps, { fetchStreams, deleteStream })(
  StreamDelete
);
