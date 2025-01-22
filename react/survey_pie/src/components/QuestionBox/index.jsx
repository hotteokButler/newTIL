import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox({
  question,
  questionsLength,
  step,
  answer,
  setAnswer,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!question) navigate(-1);
  }, []);

  if (question) {
    return (
      <div>
        <Title>{question.title}</Title>
        <Desc>{question.desc}</Desc>
        <Body
          type={question.type}
          answer={answer}
          setAnswer={setAnswer}
          options={question.options}
        />
        <ActionButtons questionsLength={questionsLength} step={step} />
      </div>
    );
  }
}
