import React, { Component } from "react";
import LoginHeader from "./components/loginHeader";
import LoginForm from "./components/loginForm";
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <LoginHeader className="header"></LoginHeader>
        <LoginForm className="form"></LoginForm>
      </div>
    );
  }
}

export default Login;
