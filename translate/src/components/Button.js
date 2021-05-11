import { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
/**
 * @author dbatista
 */
class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(c) => (
          <button className={`ui button ${c}`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === "english" ? "Submit" : "Voorlegen"
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
