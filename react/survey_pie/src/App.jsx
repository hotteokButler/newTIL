import './assets/style/normalize.css';

import { Route, Routes } from 'react-router-dom';

import * as CS from './assets/style/main.styled';
import CompletionPage from './pages/CompletionPage/index';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <CS.SurveyPieWrapper>
      <CS.SurveyPiePageWrapper>
        <Routes>
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            {/* 분리하게되면 부모 route 기준으로 usenavigate 상대 경로 지정 가능 */}
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/done" element={<CompletionPage />} />
        </Routes>
      </CS.SurveyPiePageWrapper>
    </CS.SurveyPieWrapper>
  );
}

export default App;
