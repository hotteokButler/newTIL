## 1. App Router — 핵심 개념

- **App Router란?**
  `/app` 디렉터리를 활용하는 **파일 시스템 기반 라우터**로, React의 최신 기능(서버 컴포넌트, Suspense, 서버 함수 등)을 기본으로 통합한 네이티브 라우팅 구조입니다

- **Page Router 대비 보완 목적**
  페이지 기반 라우팅(`/pages`)은 단순하지만, 복잡한 레이아웃 재사용, 중첩, 데이터 공유 시 중복 코드와 유지보수 부담이 증가함. App Router는 이 문제를 해결하고자 등장했습니다.

- **주요 기능 및 특성**

  - **폴더 기반 라우팅**: 각 `app/<route>/page.js`가 URL 경로로 매핑 .
  - **중첩 레이아웃 지원**: `layout.js` 파일 단위로 루트 및 하위 경로에 레이아웃 적용 .
  - **특수 파일 기능**: `loading.js`, `error.js`, `not-found.js`, `route.js`로 각각 로딩·오류·404·API 핸들러 구현 가능
  - **서버 컴포넌트와 데이터 페칭**: async 페이지 컴포넌트에서 fetch 사용 가능하며, `getStaticProps`, `getServerSideProps` 없이 서버사이드 데이터 처리 지원
  - **병렬 렌더링 & 스트리밍**: Suspense 기반으로 병렬 처리 및 콘텐츠 스트리밍 가능 .
  - **코드 공존/점진 도입 가능**: `/app`과 `/pages` 디렉터리 동시 사용이 가능하며, 동일 경로 충돌 시 `/app`이 우선

<br>
<br>

## 2. App Router vs Page Router 비교

| 항목                | App Router                                                | Page Router                                                                 |
| ------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| **라우팅 방식**     | 폴더 기반, `/app/about/page.js` → `/about`                | 파일 기반, `/pages/about.js` → `/about`                                     |
| **레이아웃**        | `layout.js`로 중첩 레이아웃 구현 가능 (루트부터 포함)     | 공통 레이아웃 `_app.js`로만 전체 페이지 적용, 중첩 레이아웃 구현 복잡       |
| **데이터 페칭**     | async 컴포넌트 내부 fetch, 서버 컴포넌트 기본             | `getStaticProps`, `getServerSideProps`, `getInitialProps`를 페이지별로 사용 |
| **특수 파일**       | `loading.js`, `error.js`, `not-found.js`, `route.js` 제공 | `_error.js`, `404.js`, `_app.js`, `_document.js` 등 한정적 지원             |
| **React 최신 기능** | React 18 기능 전면 지원 (서버 컴포넌트, Suspense 등)      | 주로 클라이언트 컴포넌트 기반, 최신 기능 제한적                             |
| **학습 곡선**       | 구조가 복잡하고 파일 수 많아 진입장벽 있음                | 단순 구조 및 props 자동 공유로 진입이 쉬움                                  |
| **성능**            | 서버 컴포넌트 + 스트리밍으로 초기 로드 최적화 가능        | 안정적이지만, SSR/Suspense 기반 병렬 렌더링 미지원                          |
| **프로젝트 적용**   | 새 프로젝트 추천, 점진 도입 가능                          | 기존 프로젝트 유지 보수 용 적합, 신규에는 한계 있음                         |

- **장점 요약**

  - App Router: 유연한 중첩 구조, 최신 React 기능, 구조적 일관성.
  - Page Router: 쉬운 진입, 간단한 설정, 널리 알려진 방식.

- **단점 요약**

  - App Router: 생성 파일多, 학습 곡선 있음.
  - Page Router: 복잡해질 경우 유지보수 어려움, 중첩 레이아웃 부족.

<br>
<br>

## 3. App Router 폴더 구조와 각 파일 역할

`/app` 디렉터리에는 각 route segment를 구성하는 특수 파일들이 존재합니다 :

```
app/
├─ layout.js        ← 전체 레이아웃 (루트)
├─ page.js          ← 루트 페이지 콘텐츠
├─ loading.js       ← 페이지 로딩 UI
├─ error.js         ← 오류 발생 시 UI
├─ not-found.js     ← 404 페이지
├─ api/route.js     ← API 라우트 핸들러
└─ about/
   ├─ layout.js     ← `/about` 하위 레이아웃
   ├─ page.js       ← `/about` 페이지
   └─ … 기타 files
```

- **layout.js**: 해당 폴더와 하위 페이지에 공통 레이아웃 제공. 중첩 효율적.
- **page.js**: URL 경로와 대응하며, UI를 정의하는 기본 컴포넌트. async 함수 정의도 가능 .
- **loading.js**: Suspense 중에 보여질 로딩 화면 지정
- **error.js**: 해당 경로에서 에러가 발생했을 때 UI 처리 .
- **not-found.js**: 404 대응 UI. 더 상세한 에러 페이지 가능
- **route.js**: API 핸들러 작성 (GET, POST 등) .
- **Private 폴더** (`_folderName`): 라우터 제외용, 내부 모듈 저장 용도
- **Route 그룹** (`(folder)`): URL 경로에 포함되지 않고 코드 구조만 정리
- **src 폴더 사용**: `/src/app` 또는 `/src/pages` 구조 가능하며, `/public`과 설정 파일은 루트 유지 .

<br/>
<br/>

## 4.추가 정리

- static page : 데이터의 업데이트가 추가로 필요하지 앖으므로 pre-fetching으로 RSC paylod + js 번들 둘 다 불러옴
- dynamic page : 데이터의 향후 업데이트가 필요할 수 있으므로 RSC payload만 pre-fethcing 후 실제 페이지 이동이 발생했을 때 js 번들 가져오도록 설정
