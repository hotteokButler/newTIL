# React-Router Start

<button style="border-radius:4px;background:#c191ff;display:inline-block;padding:4px 8px;"><a href="I" style="color:#fff;font-size:1rem;font-weight:800;">React Router 공식문서</a></button>

### Routing이란?

- 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 프로세스

1. HashRouter

- 주소에 해쉬태그가 붙는다(#)
- BrowserRouter와 다르게 새로고침하여도 에러 발생 X
  (서버에 요청하지 않아서)
- SEO에 취약 (검색엔진이 읽지 못함)
- 주로 정적인 페이지에서 사용

2. BrowserRouter

- HTML5의 <button style="border-radius:2px;background:##c191ff;display:inline-block;padding:2px 8px;"><a href="https://developer.mozilla.org/ko/docs/Web/API/History_API" style="color:#fff;">history API</a></button>를 활용한 라우터입니다. <br>
  ㄴ history API는 내부적으로 stack 자료구조의 형태 <br>
- 별도의 서버 설정이 없다면 새로고침 시 404에러가 발생한다. <br>
  ㄴ 서버에는 기본 라우트 '/'만 저장 <br>
  ㄴ 하위 routing은 default 경로를 통해 이루어짐, 해당 경로 제외하고는 서버이서 인식 불가 <br>
  ㄴ 필요 시 해당 주소 및 페이지 서버에 알려줘야함 그 외는 /\* 경로접근 -> '/'로 리다이렉션
- 동적인 페이지에서 사용
- 큰 프로젝트에 적합

### React-Router-Dom

React로 생성된 SPA 내부 라우팅 라이브러리

1. 설치

```cmd
yarn add react-router-dom
yarn add @types/react-router-dom //ts

npm install react-router-dom
npm install react-router-dom @types/react-router-dom
```

2. createBrowserRouter & RouterProvider
- DOM History API 기반
- createBrowserRouter (v.6.4 부터 사용 가능 이전 버전은 `<BrowserRouter>` 사용) <br>
- createBrowserRouter()에 라우팅 할 path와 element로 작성. <br>
- children 속성으로 배열에 중첩된 라우터(Nested Router)를 추가가능<br>
  ```
    <!-- type Declaration -->
    function createBrowserRouter(
    routes: RouteObject[],
    opts?: {
      basename?: string;
      future?: FutureConfig;
      hydrationData?: HydrationState;
      window?: Window;
    }
    ): RemixRouter;
  ```


```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router_config } from './router_config';
import './index.css';

const RouterConfig = createBrowserRouter(router_config);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RouterConfig} />
  </React.StrictMode>
);

```

```jsx
// router_config.jsx

import Layout from '../Layout';
import Main from '../Main';
import Sub01 from '../Sub01';
import Sub02 from '../Sub02';
import Sub03 from '../Sub03';
import ErrorPage from '../ErrorPage';

// 중첩 경로는 children을 이용해서 사용
export const router_config = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
        label: 'main',
      },
      {
        path: '/sub01',
        element: <Sub01 />,
        label: 'sub01',
      },
      {
        path: '/sub01',
        element: <Sub02 />,
        label: 'sub02',
      },
      {
        path: '/sub01',
        element: <Sub03 />,
        label: 'sub03',
      },
    ],
  },
]);
```

- `<Outlet>` 사용하여 child routes render 가능

```jsx
// Layout.jsx
import * as React from 'react';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```