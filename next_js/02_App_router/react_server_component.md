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

## 3. RSC 주의사항

- **서버 컴포넌트**에는 브라우저에서 실행될 코드가 포함되면 안된다.
  - `use State`나 `use Effet`와 같이 브라우저측에서 동작하는 훅스 포함X
  - 라이브러리라도 브라우저측에서 실행되는 기능을 담고 있다면 서버 컴포넌트에서 쓸 수 없음
- **클라이언트 컴포넌트**는 클라이언트에서만 실행되지 않는다.
  - 클라이언트 컴포넌트 -> 페이지 라우터 버전에서도 똑같이 쓰고 있던 일반적인 컴포넌트들을 의미
    - 서버측 사전 렌더리때 1회 실행 + hydration으로 인해 브러우처 측에서 1회 실행 = 총 2회 실행됨 (서버와 클라이언트에서 모두 실행됨)
- **클라이언트 컴포넌트**에서 **서버 컴포넌트**를 import 할 수 없다.

  - 의도치 않은 동작이나, 오류 발생 가능성
    - 서버에서 실행될 때는 둘 다 존재하기 때문에 오류가 생기지 않음 -> 브라우저에서 실행 시 서버 컴포넌트는 번들 파일에 포함되지 않음 -> 서버 컴포넌트는 존재하지 않게 되고 없는 것을 Import 하려함 -> 오류 또는 의도치 않은 동작 발생
    - next js가 'use client'라는 지시자가 없어도 클라이어늩 컴포넌트로 변경해 동작시키기도 함.
      - **클라이언트 컴포넌트에서 서버 컴포넌트를 써야하는 경우** : `{children}` props로 전달해서 렌더링 해주기 <br/>
        -> Next는 children으로 전달된 서버 컴포넌트는 클라이언트 컴포넌트로 변경하지 않음 (서버 컴포넌트의 결과물만 children이라는 props로 전달받음)

- **서버 컴포넌트에서**에서 **클라이언트 컴포넌트**에게 직렬화 되지 않는 Props는 전달 불가

  - `직렬화(Serialization)` : 객체, 배열, 크랠스 등의 복잡한 구조의 데이터를 네트워크 사응로 전송하기 위해 아주 단순한 형태(문자열,Byte)로 변환한 것

    - 자바스크립트의 함수는 직렬화가 불가능
      - js 함수는 어떠한 값이 아닌 코드 블럭들을 포함하고 있는 특수한 형태를 가지고 있음, 클로저나 렉시컬 스코프 등의 다양한 환경에 의존해 있는 경우가 많아 단순한 문자열이나 바이트 형태로 표현 불가
      - props로 전달 불가
      - 사전 렌더링 과정 : 페이지 구성하는 컴포넌트를 실행하나 그 중 서버 컴포넌트들만 다로 실행 후 RSC Payload형태로 직렬화 -> 클라이언트 컴포넌트 실행 -> 완성된 html 페이지 렌더링
        - 이 과정에서 JS 함수 전달 시, 직렬화 될 수 없는 데이터를 전달하므로 런타임 오류 발생

  - **RSC Payload** :
    - React Server Component의 순수 데이터(결과물)
    - React Server Component를 직렬화 한 결과

## 4. 실무에서 활용

- **목차형 블로그, 정적 페이지 등**: 데이터 패칭 후 표시만 하면 되는 UI 구성에 최적.
- **대시보드, 리포트 화면**: 서버에서 계산한 데이터 바로 렌더 → 클라이언트 부담 감소 .
- **보안 중요 화면**: API 키/DB 접근 논리 숨기고 렌더링.
- **하이브리드 페이지**: RSC 부모 안에 버튼/입력 등 클라이언트 컴포넌트 배치.

## 5. Server Component vs Client Component 비교

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

> - 페이지 대부분을 `Server Component`로 구성할 것 권장, `Client Component`는 꼭 필요한 경우에만 사용할 것
> - 상호작용이 필요하면 `Client Component`로 만들기
>   - ex: input, programtic하게 이동시킬 때 등등

## 6. RSC 장단점

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
