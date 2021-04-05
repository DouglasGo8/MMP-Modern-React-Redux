import { Component } from "react";

import "./app.css";
import SeasonDisplay from "./containers/SeasonDisplay";
/**
 * @author dbatista
 */
class App extends Component {
  state = {
    lat: null,
    errMsg: "",
  };

  /* */

  async componentDidMount() {
    console.log("hit async didMount");

    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        console.error(err);
        this.setState({ errMsg: err.message });
      }
    );
  }

  async componentDidUpdate() {
    console.log("hit async didUpdate");
  }

  async componentWillUnmount() {
    console.log("hit async willUnmount");
  }

  render() {
    console.log("hit render");

    if (this.state.errMsg && !this.state.lat) {
      return (
        <div>
          <hr />
          Error: {this.state.errMsg}
          <hr />
        </div>
      );
    }
    if (!this.state.errMsg && this.state.lat) {
      return (
        <div>
          <hr />
          <SeasonDisplay lat={this.state.lat} />
          <hr />
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

export default App;
