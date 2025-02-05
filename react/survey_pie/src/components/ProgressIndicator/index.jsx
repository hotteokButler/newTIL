import { useRecoilValue } from 'recoil';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import * as S from './progressIndicator.styled';

export default function ProgressIndicator() {
  const questionLength = useRecoilValue(questionsLengthState);
  const step = useStep();
  const [answers] = useAnswers();
  const bars = [];

  for (let i = 0; i < questionLength; i++) {
    let status = 'pending';
    if (i === step) {
      // 해당 질문일때
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }

    bars.push(<S.Bar $status={status} key={i} />);
  }

  return (
    <S.ProgressIndicatorWrapper>
      {bars}
      <S.PageCounter>
        <span>{step + 1}</span>&#47;{questionLength}
      </S.PageCounter>
    </S.ProgressIndicatorWrapper>
  );
}
