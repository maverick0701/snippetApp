import React, { Component } from "react";
import { connect } from "react-redux";
import PostsList from "./postList";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <PostsList {...this.props} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

const connectedHomeComponent = connect(mapStateToProps)(Home);

export default connectedHomeComponent;
