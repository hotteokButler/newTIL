import './assets/style/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);
