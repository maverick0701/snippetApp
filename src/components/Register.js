import React, { Component } from "react";
import { connect } from "react-redux";
import { destroyMessage } from "../actions/destroyAction";
import { userCreation } from "../actions/reg";
import { Redirect } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.setState({
      email: "",
      password: "",
      confirm_password: "",
      name: "",
    });
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
  }
  componentWillUnmount() {
    this.props.dispatch(destroyMessage());
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
  handleCPassChange = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state != null) {
      this.props.dispatch(
        userCreation(
          this.state.email,
          this.state.password,
          this.state.confirm_password,
          this.state.name
        )
      );
    }
  };

  render() {
    const { inProgress, message } = this.props.reg;
    const { isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {message && <div className="alert error-dailog">{message}</div>}
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
            type="text"
            placeholder="name"
            required
            onChange={this.handleNameChange}
            value={this.name}
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={this.handleCPassChange}
            value={this.confirm_password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Signing up...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Sign Up
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
    reg: state.reg,
  };
}

const connectedRegisterComponent = connect(mapStateToProps)(Register);
export default connectedRegisterComponent;
