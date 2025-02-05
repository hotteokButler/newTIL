import * as S from './progressIndicator.styled';

export default function ProgressIndicator() {
  return (
    <S.ProgressIndicatorWrapper>
      <S.Bar $status="done" />
      <S.Bar $status="in-progress" />
      <S.Bar $status="pending" />
      <S.PageCounter>
        <span>2</span>&#47;3
      </S.PageCounter>
    </S.ProgressIndicatorWrapper>
  );
}
