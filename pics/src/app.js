import React, { Component } from "react";

import "./app.css";
import axios from "axios";

import SearchBar from "./containers/SearchBar";
import ImageList from "./components/ImageList";

/**
 * @author dbatista
 */
class App extends Component {
  state = {
    memes: [],
  };

  onSearchSubmit = async (term) => {
    const url = `https://api.imgflip.com/${term}`;

    //console.log(url);
    const resp = await axios.get(url, {
      method: "GET",
    });

    //console.log(resp.data.data.memes);

    this.setState({ memes: resp.data.data.memes });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList memes={this.state.memes} />
      </div>
    );
  }
}

export default App;
