import React from "react";
import { fetchPosts } from "./actions/posts";
import { connect } from "react-redux";
import propTypes from "prop-types";
import PostsList from "./components/postList";
import Navbar from "./components/navbar";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Navbar />
        <PostsList posts={posts} />
      </div>
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
