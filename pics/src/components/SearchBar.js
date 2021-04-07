import React, { Component } from "react";

/**
 * @author dbatista
 */
class SearchBar extends Component {
  state = {
    term: "",
  };
  /**
   * callback function over uncontrolled form
   */
  onInputChange = async (evt) => {
    console.log(evt.target.value); // contains the value of control that hitted the event
  };


  /**
   * Arrow function's can access {this} context, to avoding contexts issues
   * @param {*} evt 
   */
  onFormSubmit = async (evt) => {
    evt.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={async (e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
