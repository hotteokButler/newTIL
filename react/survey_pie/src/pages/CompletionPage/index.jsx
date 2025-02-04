import { FaRedo } from 'react-icons/fa';

import congrats from '../../assets/images/congrats.png';
import * as S from './CompletionPage.styled';

export default function CompletionPage() {
  return (
    <S.CompletionPageWrapper>
      <S.CompletionPageInner>
        <S.CompletionImgCon>
          <img src={congrats} alt="" />
          <S.CompletionMidText>설문이 완료되었습니다.</S.CompletionMidText>
        </S.CompletionImgCon>
        <S.ReloadButton type="TERTIARY">
          <FaRedo /> 새로운 응답 제출하기
        </S.ReloadButton>
      </S.CompletionPageInner>
    </S.CompletionPageWrapper>
  );
}
