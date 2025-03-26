import axios from 'axios';

const postSurvey = (survey, navigate) => {
  axios
    .post(`/surveys/`, survey)
    .then((res) => {
      if (res.status === 201) {
        alert('정상적으로 저장이 완료되었습니다😎');
        navigate
          ? navigate(`/builder/${res.data.id}`)
          : window.location.replace(`/builder/${res.data.id}`);
      }
    })
    .catch((err) => {
      console.log(err);
      alert('예기치 못한 오류가 발생했습니다😭');
    });
};
export default postSurvey;
