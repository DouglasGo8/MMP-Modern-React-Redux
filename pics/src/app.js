import React, { Component } from "react";

import "./app.css";

import SearchBar from "./components/SearchBar";

/**
 * @author dbatista
 */
class App extends Component {

  onSearchSubmit = async (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
