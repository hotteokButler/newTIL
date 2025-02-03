import { Suspense } from 'react';

import ProgressIndicator from '../../components/ProgressIndicator/index';
import QuestionBox from '../../components/QuestionBox';
import * as S from './surveyPage.styled';

export default function SurveyPage() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <S.SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </S.SurveyPageWrapper>
    </Suspense>
  );
}
