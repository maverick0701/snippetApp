import React from "react";
import { fetchPosts } from "./actions/posts";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import propTypes from "prop-types";
import Navbar from "./components/navbar";
import Page404 from "./components/Page404";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: propTypes.array.isRequired,
};
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
