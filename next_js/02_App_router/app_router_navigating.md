# Navigating - APP ROUTER

- **페이지 이동**이나 **pre-fetching**시에 서버가 브라우저에게 `JS번들 + RSC paylod`를 함께 전달
  - JS번들에는 서버 컴포넌트가 빠져 있기 때문에, 브라우저에게 함께 보내주기 위해 RSC Payload를 같이 전달하게 됨

## 1. APP Router 페이지 이동 작동 방식

- `Page Router`과 동일하게 초기 접속 이후에는 `CRS`방식으로 동작 -> `JS번들(Client C.) + RSC paylod(Server C.)` 전달 -> (브라우저) JS번들 실행 후 RSC Payload와 합쳐서 페이지를 교체하게 됨

## 2. Programmatic Navigation - 코드 내 경로 이동 제어

### 2-1.🌐 서버 컴포넌트에서의 네비게이션

#### ✅ 2-1-1. 직접 경로 이동은 불가

- 서버 컴포넌트는 사용자 이벤트(클릭 등)를 직접 다룰 수 없고, `useRouter`, `window` API 등의 브라우저 기능 접근이 안 됨

### ✅ 2-1-2. 리다이렉션을 위한 `redirect()` 함수

- 서버에서 조건에 따라 즉시 리다이렉트가 필요할 때는 `redirect()`를 사용.
- `app/api`나 `route.js` 등 서버 코드 내에서도 import 가능하며, 요청 처리 중 네비게이트를 서버단에서 수행할 수 있음 .

#### ✅ 2-1-3. URL 기반 조건 렌더링

- 서버 컴포넌트는 URL을 직접 읽거나 네비게이션할 수 없으므로, URL 정보가 필요하면:

  - `useParams()` in client component
  - 서버 컴포넌트는 URL 정보 없이 렌더링
  - 클라이언트 컴포넌트로 분리하여 `usePathname()` 등 사용 .

### 2-2.🛠 클라이언트 컴포넌트에서의 네비게이션

#### ✅ 2-2-1. `useRouter()` from `next/navigation`

- `useRouter()`는 클라이언트 컴포넌트 전용. 아래 기능을 제공:

```ts
'use client';
import { useRouter } from 'next/navigation';

const MyComponent = () => {
	const router = useRouter();
	router.push('/dashboard', { scroll: false }); // 새 히스토리
	router.replace('/login', { scroll: true }); // 현재 경로 대체
	router.back(); // 뒤로 이동
	router.forward(); // 앞으로 이동
	router.refresh(); // 서버 컴포넌트 새로고침
	router.prefetch('/about'); // 사전 fetch
};
```

#### ✅ 2-2-2. URL 감지용 훅

- `usePathname()` : 현재 경로
- `useSearchParams()` : 쿼리 파라미터
- `useParams()` : 동적 세그먼트 값

예:

```ts
'use client';
import { usePathname, useSearchParams } from 'next/navigation';

const NavHighlight = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	// active link 강조 등
};
```

#### ✅ 2-2-3. `<Link>` 컴포넌트 & `useLinkStatus()`

- `<Link>`는 자동 prefetch와 클라이언트 전환을 지원.
- `useLinkStatus()`는 네비게이션 로딩 상태(진행 중)를 UI로 표시하기에 유용.

```ts
'use client';
import { useLinkStatus } from 'next/link';

const Spinner = () => {
	const { pending } = useLinkStatus();
	return pending ? <SpinnerComp /> : null;
};
```

| 구분          | 서버 컴포넌트   | 클라이언트 컴포넌트                                                                            |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| 이벤트 핸들링 | ❌ 불가능       | ✅ `onClick` 등 가능                                                                           |
| 라우터 훅     | ❌ 사용 불가    | ✅ `useRouter`, `usePathname`, `useSearchParams`, `useParams`                                  |
| 네비게이션    | ✅ `redirect()` | ✅ `router.push`, `router.replace`, `router.back/forward`, `router.refresh`, `router.prefetch` |
| `<Link>`      | ❌              | ✅ 클라이언트 전환 & prefetch                                                                  |
| 로딩 상태     | ❌              | ✅ `useLinkStatus()`                                                                           |

### 📚 인용 (References)

- [한 입 크기로 잘라먹는 Next.js(v15) 강의 | 이정환 Winterlood](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)
- [Getting Started: Server and Client Components - Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Navigation on app router without useRouter : r/nextjs - Reddit](https://www.reddit.com/r/nextjs/comments/1de0ki0/navigation_on_app_router_without_userouter)
- [How to change part of layout based on current path in nextjs app - Stack Overflow](https://stackoverflow.com/questions/78531502/how-to-change-part-of-layout-based-on-current-path-in-nextjs-app-router-server-c)
- [useRouter only works in client components - Stack Overflow](https://stackoverflow.com/questions/76206772/i-am-using-the-new-app-router-in-nextjs-getting-erroruserouter-only-works-in-c)
- [Difference between router in next/navigation and next/router - Ram Patra Blog](https://blog.rampatra.com/difference-between-router-in-next-navigation-and-next-router-in-next-js)
- [Migrating: App Router - Next.js](https://nextjs.org/docs/app/guides/migrating/app-router-migration)
- [Getting Started: Linking and Navigating - Next.js](https://nextjs.org/docs/app/getting-started/linking-and-navigating)
