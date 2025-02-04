import { mainApi } from './apis/mainApi';

//window.location.pathname.split('/')[2]를 쓰는 경우
// 해당 함수가 location에 의존성을 갖기 때문에 인자 전달로 바꿈

export default function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}
