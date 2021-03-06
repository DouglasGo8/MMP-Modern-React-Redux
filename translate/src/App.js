import { Component, Fragment } from "react";

import "./App.css";

import UserCreate from "./components/UserCreate";
import ColorContext from "./contexts/ColorContext";
import { LanguageStore } from "./contexts/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

/**
 *
 */
class App extends Component {
  render() {
    return (
      
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
