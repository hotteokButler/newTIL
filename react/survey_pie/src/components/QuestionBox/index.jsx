import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import answersState from '../../stores/answers/atom';
import questionsState from '../../stores/questions/atom';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox() {
  const params = useParams();
  const step = parseInt(params.step);

  const questions = useRecoilValue(questionsState);

  const [answers, setAnswers] = useRecoilState(answersState);

  const question = questions[step];
  const answer = answers[step];

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

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
        <ActionButtons />
      </div>
    );
  }
}
