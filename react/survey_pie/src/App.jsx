import { Route, Routes } from 'react-router-dom';

import CompletionPage from '../pages/CompletionPage';
import SurveyPage from '../pages/SurveyPage';

function App() {
  return (
    <div id="survey_pie_app">
      <Routes>
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          {/* 분리하게되면 부모 route 기준으로 usenavigate 상대 경로 지정 가능 */}
          <Route path=":step" element={<SurveyPage />} />
        </Route>
        <Route path="/done" element={<CompletionPage />} />
      </Routes>
    </div>
  );
}

export default App;
