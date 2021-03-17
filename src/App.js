import React from "react";
import { fetchPosts } from "./actions/posts";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
