import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/helloWorld">
                <Icon type="pie-chart" />
                <span>HelloWorld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
              <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Link to="/clock">
                <Icon type="pie-chart" />
                <span>Clock</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/toggle">
                <Icon type="pie-chart" />
                <span>Toggle</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
              {/*之后我们设置的路由会通过替换 children 变量实现内容的切换。*/}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}