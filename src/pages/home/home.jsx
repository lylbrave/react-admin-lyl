import React, { Component } from 'react';
import { Layout } from 'antd';
import './home.css'
import MySider from './components/sider'
const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout className="layout">
                <Sider><MySider></MySider></Sider>
                <Layout>
                    <Header className="header">管理系统</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
