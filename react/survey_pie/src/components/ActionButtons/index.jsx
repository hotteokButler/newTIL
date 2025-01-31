import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import questionsState from '../../stores/questions/atom';
import Button, { ButtonWrapper } from '../Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  const params = useParams();
  let step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;
  const isLast = questionsLength - 1 === step;

  useEffect(() => {
    if (!questions) navigate(-1);
  }, []);

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
            navigate('/done');
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
