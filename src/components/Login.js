import React, { Component, createContext } from "react";
import { connect } from "react-redux";
import { createSession } from "../actions/auth";
class Login extends Component {
  constructor(props) {
    super(props);
    this.setState({
      email: "",
      password: "",
    });
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(createSession(this.state.email, this.state.password));
  };

  render() {
    const { inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePassChange}
            value={this.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedLoginComponent = connect(mapStateToProps)(Login);
export default connectedLoginComponent;
