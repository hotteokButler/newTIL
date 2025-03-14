import { Col, Input, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from '../stores/survey/surveySlice';

const BuilderPage = () => {
  const surveyData = useSelector((state) => state.survey); // store data 구독
  const dispatch = useDispatch();

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row gutter={[16, 16]}>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해 주세요."
            value={surveyData.title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
          <PreviewSection
            questions={surveyData.questions}
            addQuestion={(type) => dispatch(addQuestion(type))}
            handleQuestion={{
              moveUpQuestion: (index) => {
                if (index === 0) return;
                dispatch(moveUpQuestion(index));
              },
              moveDownQuestion: (index) => {
                if (index === surveyData.questions.length - 1) return;
                dispatch(moveDownQuestion(index));
              },
              deleteQuestion: (index) => {
                dispatch(deleteQuestion(index));
              },
            }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
