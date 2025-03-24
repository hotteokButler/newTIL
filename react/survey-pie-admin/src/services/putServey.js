import axios from 'axios';

const putSurvey = (survey) => {
  axios
    .put(`/surveys/${survey.id}`, survey)
    .then(
      (res) =>
        res.status === 200 && alert('정상적으로 저장이 완료되었습니다😎'),
    )
    .catch((err) => {
      console.log(err);
      alert('예기치 못한 오류가 발생했습니다😭');
    });
};
export default putSurvey;
