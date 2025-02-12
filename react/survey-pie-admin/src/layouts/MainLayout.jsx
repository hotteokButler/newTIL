import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: '1',
      label: '설문 조사 관리',
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
          defaultSelectedKeys={['1']}
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
