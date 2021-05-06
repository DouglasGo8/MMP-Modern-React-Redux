import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";

/**
 * @author dbatista
 */
class StreamList extends Component {
  /**
   *
   */
  componentDidMount = async () => {
    //console.log(this.props)
    this.props.fetchStreams();
  };

  renderAdmin = (stream) => {
    if (stream.userId && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/edit/${stream._id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/delete/${stream._id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      // console.log(stream);
      if (stream.title) {
        return (
          <div className="item" key={stream._id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligned icon camera"></i>
            <div className="content">
              <Link to={`/${stream._id}`} className="header">{stream.title}</Link>
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      }
    });
  };

  renderCreate() {
    if (this.props.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/new" className="ui button primary">
            Create
          </Link>
        </div>
      );
  }

  render() {
    //console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
