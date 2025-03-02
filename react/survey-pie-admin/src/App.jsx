import { Route, Routes } from 'react-router-dom';

import BuilderPage from './pages/BuilderPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/builder/:surveyId" element={<BuilderPage />} />
    </Routes>
  );
}

export default App;
