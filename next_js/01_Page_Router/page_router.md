## 📘 Pages Router

**Pages Router**는 Next.js 13 이전 버전에서 기본 라우팅 시스템으로 사용되었으며, 파일 시스템 기반의 라우팅을 제공.

### 주요 특징

- **파일 기반 라우팅**: `pages` 디렉토리 내의 파일 구조가 URL 경로와 자동으로 매핑.

  ```bash
  pages/
    index.js       → '/'
    about.js       → '/about'
    blog/
      [id].js      → '/blog/:id'
  ```

- **동적 라우팅**: 대괄호 `[]`를 사용하여 동적 경로를 설정할 수 있음.

  ```bash
  pages/posts/[id].js → '/posts/1', '/posts/2' 등
  ```

- **중첩 라우팅**: 폴더 구조를 통해 중첩된 경로를 생성할 수 있음.

  ```bash
  pages/dashboard/settings/username.js → '/dashboard/settings/username'
  ```

- **커스텀 App 및 Document 구성**:

  - `pages/_app.js`: 모든 페이지에 공통으로 적용되는 레이아웃이나 상태를 설정할 수 있음.
  - `pages/_document.js`: HTML 문서의 구조를 커스터마이징할 수 있음.

- **API Routes 지원**: `pages/api/` 디렉토리 내에 파일을 생성하여 API 엔드포인트를 구축할 수 있음.

  ```bash
  pages/api/hello.js → '/api/hello'
  ```

- **클라이언트 사이드 라우팅**: `next/link` 컴포넌트와 `useRouter` 훅을 활용하여 클라이언트 사이드에서의 라우팅을 구현할 수 있음.

  ```jsx
  import Link from 'next/link';

  function Navigation() {
  	return (
  		<nav>
  			<Link href='/about'>About</Link>
  		</nav>
  	);
  }
  ```

  ```jsx
  import { useRouter } from 'next/router';

  function NavigateButton() {
  	const router = useRouter();

  	const handleClick = () => {
  		router.push('/about');
  	};

  	return <button onClick={handleClick}>Go to About</button>;
  }
  ```

---

## 🧭 App Router

**App Router**는 Next.js 13에서 도입된 새로운 라우팅 시스템으로, React의 최신 기능들을 활용하여 보다 유연하고 강력한 라우팅을 제공.

### 주요 특징

- **파일 기반 라우팅**: `app` 디렉토리 내의 파일 구조가 URL 경로와 자동으로 매핑.

  ```bash
  app/
    page.js        → '/'
    about/
      page.js      → '/about'
    blog/
      [id]/
        page.js    → '/blog/:id'
  ```

- **레이아웃 지원**: `layout.js` 파일을 통해 페이지 간 공통 레이아웃을 정의할 수 있음.

  ```bash
  app/
    layout.js      → 모든 페이지에 공통 레이아웃 적용
    about/
      layout.js    → '/about' 및 하위 경로에 적용
  ```

- **서버 컴포넌트 지원**: React Server Components를 활용하여 서버에서 렌더링되는 컴포넌트를 작성할 수 있음.

- **동적 라우팅**: 대괄호 `[]`를 사용하여 동적 경로를 설정할 수 있음.

  ```bash
  app/blog/[id]/page.js → '/blog/1', '/blog/2' 등
  ```

- **중첩 라우팅 및 레이아웃**: 폴더 구조와 `layout.js`를 활용하여 중첩된 경로와 레이아웃을 구성할 수 있음.

- **에러 및 로딩 상태 처리**: `error.js`와 `loading.js` 파일을 통해 에러 및 로딩 상태를 처리할 수 있음.

  ```bash
  app/
    error.js        → 전역 에러 처리
    loading.js      → 전역 로딩 상태 처리
  ```

- **API Routes 지원**: `app/api/` 디렉토리 내에 파일을 생성하여 API 엔드포인트를 구축할 수 있음.

  ```bash
  app/api/hello/route.js → '/api/hello'
  ```

- **클라이언트 사이드 라우팅**: `next/link` 컴포넌트와 `useRouter` 훅을 활용하여 클라이언트 사이드에서의 라우팅을 구현할 수 있음.

  ```jsx
  import Link from 'next/link';

  function Navigation() {
  	return (
  		<nav>
  			<Link href='/about'>About</Link>
  		</nav>
  	);
  }
  ```

  ```jsx
  'use client';
  import { useRouter } from 'next/navigation';

  function NavigateButton() {
  	const router = useRouter();

  	const handleClick = () => {
  		router.push('/about');
  	};

  	return <button onClick={handleClick}>Go to About</button>;
  }
  ```

## 🔍 Pages Router vs. App Router 비교

| 항목                     | Pages Router                                    | App Router                                              |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------- |
| 도입 버전                | Next.js 1.x \~ 12.x                             | Next.js 13.x 이상                                       |
| 디렉토리 구조            | `pages/`                                        | `app/`                                                  |
| 라우팅 방식              | 파일 기반 라우팅                                | 파일 기반 라우팅                                        |
| 레이아웃 지원            | 제한적 (`_app.js`, `_document.js`)              | 유연한 레이아웃 구성 (`layout.js`)                      |
| 서버 컴포넌트 지원       | 미지원                                          | 지원 (React Server Components)                          |
| 동적 라우팅              | 지원 (`[param].js`)                             | 지원 (`[param]/page.js`)                                |
| 중첩 라우팅              | 폴더 구조를 통한 중첩 라우팅                    | 폴더 구조와 `layout.js`를 통한 중첩 라우팅              |
| 에러 및 로딩 상태 처리   | 커스텀 처리 필요                                | `error.js`, `loading.js`를 통한 내장 지원               |
| API Routes               | `pages/api/` 디렉토리 내에 정의                 | `app/api/` 디렉토리 내에 정의                           |
| 클라이언트 사이드 라우팅 | `next/link`, `useRouter` 활용                   | `next/link`, `useRouter` 활용                           |
| 권장 사용 시점           | 기존 프로젝트 유지보수 또는 간단한 애플리케이션 | 새로운 프로젝트 또는 최신 React 기능 활용이 필요한 경우 |

---

### 인용

> [Next.js]: https://it.wikipedia.org/wiki/Next.js?utm_source=chatgpt.com
> [Next.js Documentation]: https://nextjs.org/docs?utm_source=chatgpt.com
> [Building Your Application: Routing - Next.js]: https://nextjs.org/docs/app/building-your-application/routing?utm_source=chatgpt.com
> [Next.js Quickstart (App Router) - Clerk]: https://clerk.com/docs/quickstarts/nextjs?utm_source=chatgpt.com
> [시리즈 | Next.js - App Router - mjieun]: https://velog.io/%40mjieun/series/Next.js-App-Router?utm_source=chatgpt.com
> [Introduction: App Router - Next.js]: https://nextjs.org/docs/app?utm_source=chatgpt.com
