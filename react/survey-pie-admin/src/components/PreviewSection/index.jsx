import styled from 'styled-components';

import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

const PreviewSection = ({ questions, addQuestion, handleQuestion }) => {
  if (!questions) return 'loading....😎';

  return (
    <PreviewSectionWrapper>
      {questions.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          description={card.desc}
          onUpButtonClick={() => handleQuestion.moveUpQuestion(idx)}
          onDownButtonClick={() => handleQuestion.moveDownQuestion(idx)}
          onDeleteButtonClick={() => handleQuestion.deleteQuestion(idx)}
        >
          <Body type={card.type} options={card.options} />
        </Card>
      ))}

      <AddButton addQuestion={addQuestion} />
    </PreviewSectionWrapper>
  );
};

export default PreviewSection;

const PreviewSectionWrapper = styled.div`
  position: relative;
  padding-right: 2.5rem;
  z-index: 1;
`;
