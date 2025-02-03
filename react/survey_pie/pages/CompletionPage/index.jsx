import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import testWithComma from '../../src/stores/test/testWithComma';
import * as S from './CompletionPage.styled';

export default function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  useEffect(() => {}, []);

  return <S.CompletionPageWrapper>{test}</S.CompletionPageWrapper>;
}
