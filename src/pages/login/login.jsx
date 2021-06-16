import React, { Component } from "react";
import LoginHeader from "./components/loginHeader";
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
      </div>
    );
  }
}

export default Login;
