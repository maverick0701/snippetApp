import React from "react";
import { fetchPosts } from "./actions/posts";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Navbar, Page404, Home, Login, Register } from "./components/index";
import jwt_decode from "jwt-decode";
import { authUser } from "./actions/auth";

const PrivateRoute = (privateRouteProps) => {
  const { component: Component, isLoggedIn, path } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.token;
    let user;
    if (token) {
      user = jwt_decode(token);
      this.props.dispatch(authUser({ email: user.email, name: user.name }));
    }
  }
  render() {
    const { posts } = this.props;
    const { isLoggedIn } = this.props.auth;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            /> */}
            <Route
              exact
              path="/signUp"
              render={(props) => {
                return <Register />;
              }}
            />
            <Route
              path="/signin"
              render={(props) => {
                return <Login {...props} />;
              }}
            />
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              posts={posts}
              path="/"
              component={Home}
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
    auth: state.auth,
  };
}

App.propTypes = {
  posts: propTypes.array.isRequired,
};
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
