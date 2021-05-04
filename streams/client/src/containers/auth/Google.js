import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { singIn, signOut } from "../../components/actions";
/**
 *
 */
class GoogleAuth extends Component {
  componentDidMount = async () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "16024244334-rkbcjbb57n68j033pa6utefpn9c7216i.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //console.log(this.auth)
          /*this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });*/
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.singIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  

  renderAuthButton = () => {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { singIn, signOut })(GoogleAuth);
