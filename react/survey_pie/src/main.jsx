import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import * as S from './assets/style/main.styled.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <S.SurveyPieWrapper>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </S.SurveyPieWrapper>
  </StrictMode>,
);
