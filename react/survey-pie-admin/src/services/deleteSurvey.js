import axios from 'axios';

const deleteSurvey = (survey) => {
  let checkTure = window.confirm(`정말 "${survey.title}"을 삭제하시겠습니까?🫢`);

  survey &&
    checkTure &&
    axios
      .delete(`/surveys/${survey.id}`)
      .then((res) => {
        res.status === 200 && alert('정상적으로 삭제가 완료되었습니다😎');
      })
      .catch((err) => {
        console.log(err);
        alert('예기치 못한 오류가 발생했습니다😭');
      });
};
export default deleteSurvey;
