# React Server Component

## 1. 핵심 개념 🧭

### 등장 배경

- **번들 크기/성능 문제 해결**: RSC는 데이터 페칭과 렌더링을 서버에서 처리하여 클라이언트에 보내는 JavaScript를 최소화합니다
- **Next.js 도입 확산**: React 19 및 Next.js 13.4+의 App Router에 기본 탑재되며, Vercel과 React 팀이 긴밀 협업 중입니다

### 핵심 개념

- **통상적인 React 컴포넌트와 달리**, 서버에서 실행되며 HTML이나 RSC 페이로드로 전달됨.
- **기본 타입**: 별도 선언 없이 `.tsx` 파일은 서버 컴포넌트. React의 `use client` 지시어로 클라이언트 전환 .
- **비동기 함수 지원**: async/await 가능하며 서버에서 직접 데이터페칭 가능 .
- **페이로드 전달 방식**: 서버에서 React Element 트리 → RSC 페이로드 → 클라이언트에서 HTML + 클라이언트 컴포넌트 하이드레이션

## 2. 핵심 기능

- **서버 데이터 접근**: API, DB, 파일 시스템 등 서버 전용 리소스 자유롭게 사용 가능.
- **JS 번들에 포함되지 않음**: 클라이언트 전송되는 JS 최소화 → 번들 크기/로딩속도 개선 .
- **시큐리티 강화**: API 키 등 민감 정보 노출 방지 .
- **스트리밍 렌더링**: 서버에서 생성한 UI를 실시간 스트림으로 클라이언트에 전달
- **Next.js App Router 통합**: 기본으로 RSC, `use client`로 클라이언트 전환

## 3. 실무에서 활용

- **목차형 블로그, 정적 페이지 등**: 데이터 패칭 후 표시만 하면 되는 UI 구성에 최적.
- **대시보드, 리포트 화면**: 서버에서 계산한 데이터 바로 렌더 → 클라이언트 부담 감소 .
- **보안 중요 화면**: API 키/DB 접근 논리 숨기고 렌더링.
- **하이브리드 페이지**: RSC 부모 안에 버튼/입력 등 클라이언트 컴포넌트 배치.

## 4. Server Component vs Client Component 비교

|                                                 | **Server Component**                            | **Client Component**                                                      |
| ----------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| **사용 환경**                                   | 서버 전용 실행 (서버측 사전 렌더링 시 1회 실행) | 브라우저 및 SSR 렌더링 모두 (사전 렌더링 1회 + hydration 1회 총 2회 실행) |
| **파일 지정 방법**                              | 기본 타입 (특별 지시어 없음)                    | 파일 상단 `'use client'` 선언                                             |
| **JS 번들 포함 여부**                           | **불포함** (JS 전송 없음)                       | 포함 (상태/이벤트/라이프사이클 지원)                                      |
| **상태 관리 & 훅** (`useState`, `useEffect` 등) | ✗ 지원하지 않음                                 | ✅ 지원                                                                   |
| **브라우저 API 접근 (localStorage 등)**         | ✗ 불가                                          | ✅ 가능                                                                   |
| **데이터 패칭 방식**                            | async/await로 직접 서버에서 fetch 가능          | useEffect, SWR 등 클라이언트 훅 사용                                      |
| **초기 로딩 성능**                              | 우수 - 번들 작고 즉시 HTML 스트리밍             | 하이드레이션 필요, 로딩 지연 가능                                         |
| **사용 시기**                                   | 데이터 중심 UI, SEO, 성능/보안 중요시 할 때     | 사용자 상호작용, 동적 UI 처리 필요할 때                                   |

    - 페이지 대부분을 `Server Component`로 구성할 것 권장, `Client Component`는 꼭 필요한 경우에만 사용할 것

## 5. RSC 장단점

| 구분            | 장점                                           | 단점                                                            |
| --------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| **성능**        | 초기 로딩 빠름 (JS 적음), FCP 개선             | 클라이언트 JS가 필요한 경우 별도 하이드레이션 필요              |
| **보안**        | 서버 사이드에서 API 키/비밀번호 숨김           | 서버 없이 동작 불가 → 서버 환경 필요                            |
| **개발 관리**   | 코드 단순화, 데이터/렌더링 병행 가능           | 컴포넌트 경계(`use client`) 관리 필요, 혼용 시 구조 복잡도 증가 |
| **구현 생태계** | Next.js와 함께라면 바로 사용 가능, 미래 지향적 | React 자체 지원은 아직 미완, Next.js 외 지원 부족               |

### 📚 인용 (References)

- [React Server Components – 공식 문서](https://react.dev/reference/rsc/server-components?utm_source=chatgpt.com)
- [Server Components vs. Client Components in Next.js: Differences … – DEV.to](https://dev.to/oskarinmix/server-components-vs-client-components-in-nextjs-differences-pros-and-cons-389f?utm_source=chatgpt.com)
- [Understanding React Server Components – Vercel 블로그](https://vercel.com/blog/understanding-react-server-components?utm_source=chatgpt.com)
- [Getting Started: Server and Client Components – Next.js 공식 문서](https://nextjs.org/docs/app/getting-started/server-and-client-components?utm_source=chatgpt.com)
- [React Server Components: A comprehensive guide – LogRocket](https://blog.logrocket.com/react-server-components-comprehensive-guide/?utm_source=chatgpt.com)
- [Making Sense of React Server Components – Josh Comeau 블로그](https://www.joshwcomeau.com/react/server-components/?utm_source=chatgpt.com)
