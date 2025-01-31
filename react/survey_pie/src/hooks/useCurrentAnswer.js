import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';

export default function useCurrentAnswer() {
  const params = useParams();
  const step = parseInt(params.step);

  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return [answer, setAnswer];
}
