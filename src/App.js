import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
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
