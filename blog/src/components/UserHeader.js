import React, { Component } from "react";

import { connect } from "react-redux";

/**
 *
 */
class UserHeader extends Component {
  //componentDidMount = async () => {
  //console.log(this.props.fetchUser(this.props.id));
  //this.props.fetchUser(this.props.id);
  //};

  render() {
    // console.log("===>" + this.props.users);
    const { user } = this.props;
    if (!user) return null;

    return <div className="header">{user.name}</div>;
    /*const user = this.props.users.find((user) => {
      user.id === this.props.id;
    });
    return <div className="header">{user.name}</div>;*/
  }
}

/**
 *
 * @param {*} state
 * @param {*} ownProps copy of this.props object
 * @returns
 */
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.id),
  };
};

export default connect(mapStateToProps)(UserHeader);
