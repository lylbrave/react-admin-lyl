import React, { Component } from "react";
class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { className } = this.props;
    return <div className={className}>后台管理系统</div>;
  }
}

export default LoginHeader;
