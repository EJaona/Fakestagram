import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    const username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-form">
        <h1
          style={{
            fontFamily: "Grand Hotel",
            fontSize: "3.5rem",
            color: "#4267B2"
          }}
        >
          Welcome to CloneGram
        </h1>
        <p style={{ fontWeight: "bold" }}>Please login..</p>
        <div className="login-div">
          <div className="username field">
            <input
              name="username"
              type="username"
              placeholder="User Name"
              style={{ textAlign: "center" }}
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="password field">
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              style={{ textAlign: "center" }}
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="login-submit field" onClick={this.submitLogin}>
            <p>Login</p>
          </div>

          <div className="remember-me">
            <div>
              <input type="checkbox" />
              <small>Remember me</small>
            </div>
            <small>
              <a href="#">Don't have an account?</a>
            </small>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
