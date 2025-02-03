import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/atom';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

export default function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  useEffect(() => {
    axios
      .get(`http://localhost:3001/surveys/${surveyId}`)
      .then((res) => {
        setSurvey(res.data);
      })
      .catch((err) => console.log(err));
  }, [surveyId, setSurvey]);

  return questions[step];
}
