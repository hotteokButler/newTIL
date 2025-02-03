import { useRecoilValue } from 'recoil';

import testWithComma from '../../stores/test/testWithComma';
import * as S from './CompletionPage.styled';

export default function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  return <S.CompletionPageWrapper>{test}</S.CompletionPageWrapper>;
}
