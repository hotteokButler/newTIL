import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

export default function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  useEffect(() => {}, [surveyId, setSurvey]);

  return questions[step];
}
