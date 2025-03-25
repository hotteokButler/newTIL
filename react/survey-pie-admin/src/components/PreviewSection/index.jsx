import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setSelectedQuestionSlice } from '../../stores/selectedQuestion/selectedQuestionSlice';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

const PreviewSection = () => {
  const dispatch = useDispatch();
  const selectedQuestionId = useSelector(
    (state) => state.selectedQusetionId.data,
  );

  const questions = useSelector((state) => state.survey.data?.questions); // store data 구독

  const handleQuestion = {
    moveUpQuestion: (index) => {
      if (index === 0) return;
      dispatch(moveUpQuestion(index));
    },
    moveDownQuestion: (index) => {
      if (index === questions.length - 1) return;
      dispatch(moveDownQuestion(index));
    },
    deleteQuestion: (index) => {
      dispatch(deleteQuestion(index));
    },
    addQuestion: (type) => dispatch(addQuestion(type)),
  };

  const handleCardClick = (index) => {
    dispatch(setSelectedQuestionSlice(index));
  };

  return (
    <PreviewSectionWrapper>
      {questions &&
        questions.map((card, idx) => (
          <Card
            key={idx}
            index={idx}
            title={card.title}
            description={card.desc}
            onUpButtonClick={() => handleQuestion.moveUpQuestion(idx)}
            onDownButtonClick={() => handleQuestion.moveDownQuestion(idx)}
            onDeleteButtonClick={() => handleQuestion.deleteQuestion(idx)}
            onCardClick={() => handleCardClick(idx)}
            isSelected={selectedQuestionId === idx}
          >
            <Body type={card.type} options={card.options} />
          </Card>
        ))}

      <AddButton addQuestion={handleQuestion.addQuestion} />
    </PreviewSectionWrapper>
  );
};

export default PreviewSection;

const PreviewSectionWrapper = styled.div`
  position: relative;
  padding-right: 2.5rem;
  z-index: 1;
`;
