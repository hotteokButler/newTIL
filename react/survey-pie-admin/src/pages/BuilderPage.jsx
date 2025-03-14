import { Col, Input, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setSurvey,
  setTitle,
} from '../stores/survey/surveySlice';

const BuilderPage = () => {
  const surveyData = useSelector((state) => state.survey.data); // store data 구독
  const dispatch = useDispatch();
  const { surveyId } = useParams();

  useEffect(() => {
    //rendering 될 때마다 실행되지 않게 useEffect안에서 호출
    dispatch((dispatch, getState) => {
      //최종적으로 실행될 때 store내 middleware 최종 action 인자를 받음
      // api 호출 -> fetcher 만들어 놓은 것을 통해 호출
      fetcher(`/surveys/${surveyId}`).then((res) => {
        //data를 다시 dispatch를 통해 store에 저장
        dispatch(setSurvey(res));
      });
    });
  }, [dispatch, surveyId]);

  if (!surveyData) return null;
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
