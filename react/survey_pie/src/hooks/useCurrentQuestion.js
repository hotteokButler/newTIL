import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import questionsState from '../stores/questions/atom';

export default function useCurrentQuestion() {
  const params = useParams();
  const step = parseInt(params.step);

  const questions = useRecoilValue(questionsState);
  return questions[step];
}
