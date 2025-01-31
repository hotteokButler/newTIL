import { useRecoilValue } from 'recoil';

import testState from '../../src/stores/test/atom';
import testWithComma from '../../src/stores/test/testWithComma';
import * as S from './CompletionPage.styled';

export default function CompletionPage() {
  const test = useRecoilValue(testWithComma);
  return <S.CompletionPageWrapper>{test}</S.CompletionPageWrapper>;
}
