import { Component, createRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../actions";

/**
 * @author dbatista
 */
class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params.id;
    this.props.fetchStream(id);
    //
    //this.player= flv.createPlayer({
    //  type: "flv",
    //  url: `http://localhost:8000/live/${id}.flv`,
    //});
    //
    //this.player.attachMediaElement(this.videoRef.current);
    //this.player.load();
    //
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //
    const { title, description } = this.props.stream;
    //
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h2>{title}</h2>
        <h5>{description}</h5>
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

export default connect(mapStateToProps, { fetchStream })(StreamShow);
