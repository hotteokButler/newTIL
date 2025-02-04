import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

export default function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  return questions[step];
}
