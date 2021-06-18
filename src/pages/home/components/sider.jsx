import React, { Component } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (<Menu
            onClick={this.handleClick}
            style={{ width: '100%', height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >

            <Menu.Item key="1">任务管理</Menu.Item>
            <Menu.Item key="2">统计分析</Menu.Item>
            <Menu.Item key="3">系统设置</Menu.Item>
            <Menu.Item key="4">其他</Menu.Item>

        </Menu>)
    }
}
export default MySider;