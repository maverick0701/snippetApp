import React, { Component } from "react";
import { connect } from "react-redux";
import PostsList from "./postList";
import { Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    const { isLoggedIn } = this.props.auth;
    if (!isLoggedIn) {
      return <Redirect to="/signIn" />;
    }
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
    auth: state.auth,
  };
}

const connectedHomeComponent = connect(mapStateToProps)(Home);

export default connectedHomeComponent;
