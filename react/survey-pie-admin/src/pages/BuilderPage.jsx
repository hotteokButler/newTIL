import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import PutSurveyButton from '../components/PutSurveyButton';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';

const BuilderPage = () => {
  const surveyLoading = useSelector((state) => state.survey.loading); // store loading 구독
  const surveyError = useSelector((state) => state.survey.error); // store error 구독
  const dispatch = useDispatch();
  const { surveyId } = useParams();

  useEffect(() => {
    //rendering 될 때마다 실행되지 않게 useEffect안에서 호출
    surveyId && dispatch(fetchSurvey(surveyId));
  }, [dispatch, surveyId]);

  if (surveyError) return 'error😩';

  if (surveyLoading) return 'now loading...😎';

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row gutter={[16, 16]} style={{ height: '100%' }}>
        <Col flex="auto" style={{ padding: '1em' }}>
          <BuilderTitleInput />
          <PreviewSection />
        </Col>
        <Col flex="350px" style={{ height: '100%' }}>
          <OptionSection />
        </Col>
        <PutSurveyButton />
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
