import { FaRedo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import congrats from '../../assets/images/congrats.png';
import useSurveyId from '../../hooks/useSurveyId';
import * as S from './CompletionPage.styled';

export default function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <S.CompletionPageWrapper>
      <S.CompletionPageInner>
        <S.CompletionImgCon>
          <img src={congrats} alt="" />
          <S.CompletionMidText>설문이 완료되었습니다.</S.CompletionMidText>
        </S.CompletionImgCon>
        <S.ReloadButton
          type="TERTIARY"
          onClick={() => {
            navigate(`/survey/${surveyId}/0`);
          }}
        >
          <FaRedo /> 새로운 응답 제출하기
        </S.ReloadButton>
      </S.CompletionPageInner>
    </S.CompletionPageWrapper>
  );
}
