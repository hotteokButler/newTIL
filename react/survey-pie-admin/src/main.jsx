import './index.css';
import '@ant-design/v5-patch-for-react-19';

import { unstableSetRender } from 'antd'; // react 19 에서 antd 사용을 위해
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

const container = document.getElementById('root');
const node = (
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
const renderReact19ForAntdUse = (node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
};

unstableSetRender(renderReact19ForAntdUse(node, container));
