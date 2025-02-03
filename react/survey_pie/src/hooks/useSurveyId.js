import { useParams } from 'react-router-dom';

export default function useSurveyId() {
  const params = useParams();
  const step = parseInt(params.surveyId);

  return step;
}
