import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";

import UserHeader from "./UserHeader";
/**
 *
 */
class PostList extends Component {
  componentDidMount = async () => {
    // console.log(this.props.fetchPosts());
    this.props.fetchPostAndUsers();
  };

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader id={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts); // [] first loaded
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
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
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);
