# App Router Data Fetching

## 1. 🔁 전체 과정

### 1-1. Pages Router (기존 방식)

```text
Client 요청 → Next.js → getServerSideProps/getStaticProps 실행 →
외부 데이터 fetch/DB 조회 →
props 생성 → 페이지 컴포넌트 렌더링 →
HTML + JSON 반환 → 클라이언트 hydration 및 이후 CSR (ex. useEffect, SWR 등)
```

#### ⚠️ Pages Router Data Fetching의 제한 및 문제점

- **코드 구조 분리**

  - fetch 로직이 컴포넌트 외부에 존재 (client component에서 async 키워드 사용 할 수 없음, 브라우저 동작 시 문제를 일으킬 수 있음) <br/>
    → props 전달 → 컴포넌트 연결해야 함 → 번거로움

- **Waterfall 우려**

  - 여러 get\*Props 간 의존성 있으면 waterfall 발생 가능

- **재검증 제어 제한**

  - SSG: ISR만, SSR: Cache-Control만 → 세밀한 제어 어려움

- **글로벌 데이터 fetch 어려움**

  - `_app.js` 에서는 사용 불가 → 페이지마다 중복

### B. App Router (최신 방식)

```text
Client 요청 → async Server Component 진입 →
컴포넌트 내 fetch/ORM 호출 →
React Server Component HTML 생성 →
클라이언트로 전송 (Stream + Suspense 지원) →
필요시 Client Component에서 use(), SWR/React Query 등으로 추가 fetch 및 UI 업데이트
```

- `app/…/page.js`에서 바로 `await fetch()` 사용 가능 -> 필요한 곳에서 데이터를 직접 불러 올 수 있음
- HTML은 서버에서 렌더링된 상태로 전달되고, hydration 이후 클라이언트 컴포넌트만 필요시 업데이트됨.

## 2. 🎯 핵심 개념 & 중요 포인트

- **Server Components + async**: 컴포넌트 내에서 직접 `fetch` 또는 ORM 사용.
- **자동 캐싱 & 재검증**: 기본 `cache=force-cache`, `{ next: { revalidate: X } }` 옵션으로 ISR 제어 가능.
- **Streaming & Suspense**: `use()`와 `<Suspense>`로 비동기 UI 조각 스트리밍 지원 .
- **React.cache**: 동일 fetch 요청을 메모이제이션해 중복 호출 방지 가능.
- **Promise.all 병렬 요청**: waterfall 방지 및 성능 향상 가능.

## 3. ⚠️ Pages Router의 문제점 vs App Router의 개선

| 항목                 | Pages Router (get\*Props 기반)                          | App Router (Server Components)                        |
| -------------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| **위치**             | 페이지 외부 `getStaticProps`, `getServerSideProps` 사용 | 컴포넌트 내부에서 `async fetch` 직접 수행             |
| **코드 구조**        | 데이터 로직 분리 → props 넘김 필수                      | 데이터 흐름이 컴포넌트 내에 자연스럽게 내재됨         |
| **캐싱/재검증 제어** | `revalidate` 옵션만 가능                                | fetch 옵션 `{ cache, next.revalidate }`로 세밀한 제어 |
| **Waterfall 이슈**   | 여러 `get*Props` 호출 간 waterfall 가능                 | 병렬 Promise 사용으로 개선 권장                       |
| **Nested Layouts**   | 직접 구현 필요, 반복 코드 발생                          | `app/.../layout.js`로 중첩 레이아웃 자동 구성         |
| **Streaming 지원**   | 없음                                                    | Server Component + Suspense 조합으로 가능             |
| **메모이제이션**     | 수동 구현 필요                                          | React.cache 자동 지원 가능                            |
| **보안/성능**        | 일부 데이터 클라이언트 노출 가능                        | 서버 렌더링 후 필요한 데이터만 전달, 보안·성능 최적화 |

## 4. 📊 Pages vs App Router 요약 비교

| 비교 항목             | Pages Router                                       | App Router                                                  |
| --------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| **데이터 Fetch 위치** | 외부 함수 (`getStaticProps`, `getServerSideProps`) | Server Component 내 `await fetch()` langsung                |
| **캐싱/재검증**       | `revalidate` 옵션 기반                             | `fetch(...,{ cache, next: { revalidate }})` 조정 가능       |
| **Streaming 지원**    | 지원 안 됨                                         | Suspense 기반 스트리밍 렌더링 지원                          |
| **Nested Layouts**    | 코드 반복/직접 구성 필요                           | app 디렉토리 layout.js로 자동 구성                          |
| **Waterfall 최적화**  | 여러 getProps 병렬화 어렵                          | 병렬 Promise.all 구조 지원                                  |
| **메모이제이션**      | 직접 로직 구현 필요                                | React.cache로 자동 메모이제이션                             |
| **코드 복잡성**       | 비교적 단순, 하지만 확장성 한계                    | 구조는 복잡해지나 유연성과 성능, 최신 기능 지원             |
| **보안·성능**         | SSR/SSG 수준 보장                                  | Server 컴포넌트 기반으로 더 나은 보안 및 최적화된 전달 가능 |

> ### 인용
>
> - [한 입 크기로 잘라먹는 Next.js(v15) 강의 | 이정환 Winterlood](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)
> - [Building Your Application: Data Fetching - Next.js](https://nextjs.org/docs/pages/building-your-application/data-fetching)
> - [Getting Started: Fetching Data - Next.js](https://nextjs.org/docs/app/getting-started/fetching-data)
> - [Data Fetching, Caching, and Revalidating - Next.js](https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
> - [Data Fetching Patterns and Best Practices - Next.js](https://nextjs.org/docs/14/app/building-your-application/data-fetching/patterns)
> - [Fetching Data - App Router - Next.js](https://nextjs.org/learn/dashboard-app/fetching-data)
