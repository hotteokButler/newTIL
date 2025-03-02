import { Col, Row } from 'antd';

import MainLayout from '../layouts/MainLayout';

const BuilderPage = () => {
  return (
    <MainLayout selectedKeys={['builder']}>
      <Row gutter={[16, 16]}>
        <Col flex="auto">col1</Col>
        <Col flex="300px">col2</Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
