import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ selectedKeys, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: 'list',
      label: <Link to="/list">설문조사 관리</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="md" collapsedWidth="0">
        <div
          className="demo-logo-vertical"
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255,255,255,0.3)',
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          items={items}
        />
      </Sider>

      <Layout>
        <Header>
          <Button type="text" onClick={() => setCollapsed(!collapsed)} />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
