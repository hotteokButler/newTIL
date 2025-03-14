import fetcher from '../lib/fetcher';
import { setSurvey } from '../stores/survey/surveySlice';

const fetchSurvey = (surveyId) => (dispatch, getState) => {
  //최종적으로 실행될 때 store내 middleware 최종 action 인자를 받음
  // api 호출 -> fetcher 만들어 놓은 것을 통해 호출
  fetcher(`/surveys/${surveyId}`).then((res) => {
    //data를 다시 dispatch를 통해 store에 저장
    dispatch(setSurvey(res));
  });
};
export default fetchSurvey;
