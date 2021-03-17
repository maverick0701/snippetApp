import React, { Component } from "react";
import PostsList from "./postList";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PostsList {...this.props} />
      </div>
    );
  }
}
