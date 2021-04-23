import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

/**
 *
 */
class PostList extends Component {

  componentDidMount = async () => {
    console.log(this.props.fetchPosts());
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>Post List</h1>
      </div>
    );
  }
}

/**
 * binds the props to actions
 */
export default connect(null, { fetchPosts })(PostList);
