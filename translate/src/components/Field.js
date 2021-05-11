import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
/**
 * @author dbatista
 */
class Field extends Component {
  /**
   * mandatory declaration
   */
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
