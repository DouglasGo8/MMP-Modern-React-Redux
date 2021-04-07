import React, { Component } from "react";

/**
 * @author dbatista
 */
class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  async componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = async () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { name, url } = this.props.meme;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={name} src={url} />
      </div>
    );
  }
}

export default ImageCard;
