import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button, { ButtonWrapper } from '../Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  let step = useStep();
  const surveyId = useSurveyId();
  const questionsLength = useRecoilValue(questionsLengthState);
  const isLast = questionsLength - 1 === step;
  const [answers] = useAnswers();

  return (
    <ButtonWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${--step}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            postAnswers(surveyId, answers)
              .then((res) => {
                console.log(res);
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                console.log(err.response);
              }); // data 전달
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ButtonWrapper>
  );
}
