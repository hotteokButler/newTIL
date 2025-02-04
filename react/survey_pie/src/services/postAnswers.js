import { mainApi } from './apis/mainApi';

export default function postAnswers(surveyId, data) {
  mainApi.post('/answers', { surveyId, data });
}
