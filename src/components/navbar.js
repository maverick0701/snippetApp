import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
class navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    this.props.dispatch(logout());
  };
  render() {
    const { isLoggedIn, user } = this.props.auth;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <Link to="/">
              <img
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
              {isLoggedIn && user.name}
            </div>
            <div className="nav-links">
              <ul>
                {!isLoggedIn && (
                  <Link to="/signIn">
                    <li id="links">Log in</li>
                  </Link>
                )}
                {!isLoggedIn && (
                  <Link to="/signUp">
                    <li id="links">Register</li>
                  </Link>
                )}
                {isLoggedIn && <li onClick={this.logout}>Log out</li>}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedNavbarComponent = connect(matchStateToProps)(navbar);
export default connectedNavbarComponent;
