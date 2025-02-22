import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

// antd + styled-component 적용시 override해서 사용
const SurLayout = styled(Layout)`
  min-height: 100vh;
`;
const SurContent = styled(Content)`
  padding: 1em;
  background: #cbdcef61;
`;
const SurSiderLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

const MainLayout = ({ selectedKeys, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: 'list',
      label: <Link to="/list">설문조사 관리</Link>,
    },
  ];

  return (
    <SurLayout>
      <Sider breakpoint="md" collapsedWidth="0">
        <SurSiderLogo className="demo-logo-vertical" />
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
        <SurContent>{children}</SurContent>
      </Layout>
    </SurLayout>
  );
};

export default MainLayout;
