import React, { Component } from "react";
import Modal from "../modal/Modal";
import { connect } from "react-redux";
import history from "../../history";
import { fetchStreams, deleteStream } from "../actions";

/**
 *
 * @returns
 */
class StreamDelete extends Component {
  componentDidMount = async () => {
    this.props.fetchStreams(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <div>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want Delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStreams, deleteStream })(
  StreamDelete
);
