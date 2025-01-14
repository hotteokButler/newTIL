import { Route, Routes } from 'react-router-dom';

import CompletionPage from '../pages/CompletionPage';
import SurveyPage from '../pages/SurveyPage';

function App() {
  return (
    <div id="survey_pie_app">
      <Routes>
        <Route path="/survey/:surveyId/:step" element={<SurveyPage />} />
        <Route path="/done" element={<CompletionPage />} />
      </Routes>
    </div>
  );
}

export default App;
