import React, { Component } from "react";
import { Form } from "antd";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={this.props.className}>登录</div>;
  }
}

export default LoginForm;
