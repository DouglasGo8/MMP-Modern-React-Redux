import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

/**
 *
 */
class PostList extends Component {
  componentDidMount = async () => {
    // console.log(this.props.fetchPosts());
    this.props.fetchPosts();
  };
  render() {
    // console.log(this.props.posts); // [] first loaded
    return (
      <div>
        <h1>Post List</h1>
      </div>
    );
  }
}
/**
 * 
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

/**
 * binds the props to actions
 */
export default connect(mapStateToProps, { fetchPosts })(PostList);
