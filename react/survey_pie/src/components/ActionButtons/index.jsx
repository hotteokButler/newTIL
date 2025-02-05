import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button, { ButtonWrapper } from '../Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  let step = useStep();
  const [isPosting, setIsPosting] = useState(false);
  const surveyId = useSurveyId();
  const questionsLength = useRecoilValue(questionsLengthState);
  const isLast = questionsLength - 1 === step;
  const [answers, setAnswers] = useAnswers();
  const isRequired = useRequiredOption();
  const canMoveToNext = isRequired ? !answers[step]?.length : false;

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
            setIsPosting((prev) => !prev);
            postAnswers(surveyId, answers)
              .then(() => {
                // 다시 제출하기 및 질문 처음으로 돌아가기전 초기화 필요
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                console.log(err.response);
                alert('에러가 발생했습니다. 다시 시도해주세요');
                setIsPosting((prev) => !prev);
              }); // data 전달
          }}
          disabled={isPosting || canMoveToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={canMoveToNext}
        >
          다음
        </Button>
      )}
    </ButtonWrapper>
  );
}
