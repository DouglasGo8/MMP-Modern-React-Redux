import { Component, Fragment } from "react";

import "./App.css";

import UserCreate from "./components/UserCreate";
import ColorContext from "./contexts/ColorContext";
import LanguageContext from "./contexts/LanguageContext";

/**
 *
 */
class App extends Component {
  state = {
    language: "english",
  };

  onLanguageChange = async (language) => {
    // console.log(language);
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:&nbsp;
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
