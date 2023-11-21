# React-Router Start

<a href="I" style="color:#fff;font-size:1rem;font-weight:800;">React Router 공식문서</a>

### Routing이란?

- 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 프로세스

1. HashRouter

- 주소에 해쉬태그가 붙는다(#)
- BrowserRouter와 다르게 새로고침하여도 에러 발생 X
  (서버에 요청하지 않아서)
- SEO에 취약 (검색엔진이 읽지 못함)
- 주로 정적인 페이지에서 사용

2. BrowserRouter

- <a href="https://developer.mozilla.org/ko/docs/Web/API/History_API" style="color:#fff;">history API</a>를 활용한 라우터입니다. <br>
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
- children 속성으로 배열에 중첩된 라우터(Nested Router)를 추가가능<br>
  ```ts
  function createBrowserRouter(
    routes: RouteObject[],
    opts?: {
      basename?: string;
      //ㄴ> root URL
      future?: FutureConfig;
      hydrationData?: HydrationState;
      window?: Window;
    }
  ): RemixRouter;
  ```
  - createBrowserRouter() - first argument : routes => Route 객체를 요소로 가지는 배열이다. children 속성으로 연결 되어 있음<br>
    ```ts
    // RouteObject[] type
    interface RouteObject {
      path?: string;
      index?: boolean;
      children?: React.ReactNode;
      caseSensitive?: boolean;
      id?: string;
      loader?: LoaderFunction;
      action?: ActionFunction;
      element?: React.ReactNode | null;
      Component?: React.ComponentType | null;
      errorElement?: React.ReactNode | null;
      ErrorBoundary?: React.ComponentType | null;
      handle?: RouteObject['handle'];
      shouldRevalidate?: ShouldRevalidateFunction;
      lazy?: LazyRouteFunction<RouteObject>;
    }
    ```
    1. path
        - 경로
        - Dynamic Segment(":"으로 시작하는 것) useParams() API로 불러올 수 있음. 다수의 Dynamic Segment 사용 가능
        - Optional Segments("?"으로 끝나는 것) useParams() API로 불러올 수 있음. router간 이동 시 optional segment는 생략해도 error component를 호출하지 않음, 여러번 호출 가능
        - Splats ("/\*"으로 끝남 , catchcall 또는 star segments로 불림) , 앞부분만 만족하면 어떤 주소도 모두 허용
        - 생략 시 UI layout을 위한 route
    2. index
        - default val : false
        - true로 설정시 부모의 route path와 동일 url 가짐
        - index router는 부모의 `<Outlet>`으로 랜더링
    3. children
        - 중첩 URL 사용 시
        - `<Outlet>` 사용하여 child routes render 가능
    4. caseSensitive
        - 주소 정확 일치 여부 (true -> 대소문자구분 / false->대소문자 구분 안함)
    5. loader
        - route element/component가 렌더링 되기 전 실행
        - 실행 return 값 => `useLoaderData()`로 제공 (loader 사용한 컴포넌트 보다 상위 컴포넌트에서는 호출 불가)
        - createBrowserRouter과 같은 data router과 함께 사용
        - 각 파일에 loader 함수 만든 후 export하여 사용하는 것이 일반적
        - GET 요청 시 실행
    6. action
        - loader 속성이 페이지 render 되기 전이라면 action은 된 후, 특정 동작에 의해 실행
        - Form, fetcher 또는 submission과 함께 사용
    7. element , Component
        - element : 페이지 렌더링
        - Component : Component만 사용하여 페이지 렌더링
        ```jsx
        // element를 사용한 방법
        const router = createBrowserRouter([
          {
            element: <Main />
          },
        ]);

        // Component을 사용한 방법
        const router = createBrowserRouter([
          {
            Component: Main
          },
        ]);
        ```
     8. errorElement / ErrorBoundary
        - 렌더링 되어야 할 페이지 오류
        - loader / action 오류
        - 이상한 주소
        - `useRouteError()`에서 확인 가능



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
        loader: async () => {
          const response = await fetch('http://localhost/data');
          if (!response.ok) {
          } else {
            const res_data = await response.json();
            return res_data.events;
          }
        },
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

```jsx
// Main.jsx
import * as React from 'react';
import { useLoaderData } from 'react-router-dom';

function Main () {
  const data = useLoaderData();
}


```

- `<Outlet>` 사용하여 child routes render 가능

```jsx
// Layout.jsx
import * as React from 'react';
import { Outlet } from 'react-router-dom';

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
