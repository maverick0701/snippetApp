import React, { Component } from "react";
import { connect } from "react-redux";
import userCreation from "../actions/reg";

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

    this.props.dispatch(
      userCreation(
        this.state.email,
        this.state.password,
        this.state.confirm_password,
        this.state.name
      )
    );
  };

  render() {
    const { inProgress, message } = this.props.reg;
    return (
      <form className="login-form">
        <span className="login-signup-header">
          Sign Up
          {message && <div className="alert error-dailog">{message}</div>}
        </span>
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
    reg: state.reg,
  };
}

const connectedRegisterComponent = connect(mapStateToProps)(Register);
export default connectedRegisterComponent;
