import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button, { ButtonWrapper } from '../Button';

export default function ActionButtons() {
  const navigate = useNavigate();
  let step = useStep();
  const questionsLength = useRecoilValue(questionsLengthState);
  const isLast = questionsLength - 1 === step;

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
