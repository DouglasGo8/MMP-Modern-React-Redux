import { Component } from "react";

import "./app.css";
import SeasonDisplay from "./containers/SeasonDisplay";
import Spinner from "./components/Spinner";
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

  renderContent = () => {
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

    return <Spinner message="Wait GeoLoc Permission" />;
  };

  render() {
    // console.log("hit render");

    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
