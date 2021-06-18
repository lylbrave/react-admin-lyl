import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const onFinish = (values) => {
      const { username, password } = values
      if (username === 'admin' && password === '123456') {
       this.props.history.push('/home')
      }
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className={this.props.className}>
        <div style={{ marginBottom: '30px' }}>登录</div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>

    )
  }
}

export default LoginForm;
