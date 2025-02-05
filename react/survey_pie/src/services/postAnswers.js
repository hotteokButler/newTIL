import { mainApi } from './apis/mainApi';

export default function postAnswers(surveyId, data) {
  return mainApi.post('/answers', { surveyId, data });
}
