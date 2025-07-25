# Request Memoization

## ✅ 1. 핵심 컨셉

### • 기능이 만들어진 이유

- React(Next.js)가 렌더링 중 중복된 `fetch(GET)` 요청이 발생할 경우, 동일한 URL/옵션이면 **한 번만 실행**하고 나머지는 메모리에서 반환하여 효율을 높이기 위해 도입됨
  - 즉, 렌더링 도중에는 네트워크 요청 횟수를 줄이는 “중복 제거(deduplication)"용
- 서버 컴포넌트의 도입으로, data fetching pattern이 변화하고 있기 때문
  - [page router] - 상위 컴포넌트에서 fetch 된 데이터는 props로 전달
  - ⬇️
  - [app router] - 각 component마다 필요 시 각각 데이터 fetch해서 독립적으로 사용 (다른 컴포넌트에서 동일한 data 사용하는 경우가 생김)

### • 핵심 동작

- **GET** 방식 `fetch`만 메모이제이션 대상
- 서버 컴포넌트 트리의 render 패스 동안 작동
- 같은 요청 URL + 옵션이라면 첫 호출 시 MISS → 요청 후 캐시 저장 → 이후 호출은 HIT → 캐시된 값을 반환.
- 렌더링 종료 후 해당 캐시는 모두 제거됨

## 📊 2. 동작 프로세스 (다이어그램)

```text
              [Next server                                         ] [ 백엔드 서버 ]
              [사전 렌더링             [ Req memo.]]  [ 데이터 캐시]

[접속요청] → [fetch(`/api/A`)] --------→ [ miss ] -→ | → [ skip ] → |
[html] ←---------------------------------- [set]  ←-----------------|
       ----→ [fetch(`/api/A`)] --------→ [ hit  ]   |
       ←----------------------------------          |
       ----→ [fetch(`/api/A`)] --------→ [ hit  ]   |
[html] ←-------------------------------------       |

```

- 렌더링 요청 동안만 캐시 존재, 종료 후 소멸
- “MISS → SET → HIT” 흐름으로 중복 호출 방지

## ⚙️ 3. 옵션을 통한 처리 방법

- **메모이제이션 대상 제외**

  - `AbortController`의 `signal` 옵션을 사용하면 해당 요청만 캐시에서 제외

- **자동 메모이제이션 대상은 GET만**

  - POST, DELETE 등은 기본적으로 memoization 되지 않으며, 다른 메서드로는 캐싱이 적용되지 않습니다

## 💾 4. Data Cache와의 차이점

| 구분            | Request Memoization                 | Data Cache                                                      |
| --------------- | ----------------------------------- | --------------------------------------------------------------- |
| **범위**        | 단일 화면 렌더링(request lifecycle) | 서버 요청 간 지속 (영속 캐시 : 서버 가동중에는 영구적 보관)     |
| **기간**        | 같은 render 패스 동안만             | 지정된 revalidate 시간, 혹은 태그 기반으로 영속                 |
| **메서드 지원** | GET 만                              | GET 기본이며, POST 등도 캐시 옵션 사용 시 가능                  |
| **메모리 위치** | 서버 RAM (메모리용 임시 저장)       | HTTP 캐시/서버 캐시 (파일, 메모리, 디스크 등 다양)              |
| **목적**        | 중복 fetch 호출 제거                | 외부 데이터 소스/API에 대한 호출량 절감 및 재사용               |
| **제어 방식**   | 자동; signal로 예외 처리 가능       | `{ cache: 'force-cache' }`, `next.revalidate`, 태그 등으로 구성 |

### 📚 인용 (References)

> - [한 입 크기로 잘라먹는 Next.js(v15) 강의 | 이정환 Winterlood](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)
> - [Request Memoization - Next.js Docs](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)
> - [Caching and Revalidating - Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
> - [Route Handlers - Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
> - [unstable_cache - API Reference](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
