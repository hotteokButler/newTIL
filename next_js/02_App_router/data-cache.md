# 데이터 캐시(Data Cache)

- fetch 메서드를 활용해 불러온 데이터를 Next 서버에서 보관하는 기능
- 영구적으로 데이터를 보관하거나, 특정 시간을 주기로 갱신 시키는 것도 가능
- 불필요한 데이터 요청 수를 줄여서 웹 서비스의 성능 개선 가능

## 1. 🎯 핵심 개념 & 목적

- **목표**

  - **중복 데이터 요청 방지, 성능 향상, 서버 부하 감소**를 위해 도입됨.
  - 같은 데이터에 대한 요청이 여러 번 발생하거나 반복적으로 API 호출이 필요할 때, **cache된 데이터를 재사용**함으로써 효율을 극대화

- **개선하려는 문제점**

  - 여러 컴포넌트에서 동일한 URL을 `fetch`하면 매번 네트워크 호출이 발생함.
  - `Server Component`에서 `fetch`, DB 쿼리 등을 캐싱하지 않으면 불필요한 I/O, 느린 렌더링 … 등 문제 발생.

## 2. 🛠 Next.js 데이터 캐시 사용법

### 2‑1. `fetch` 캐싱 옵션 - 오직 fetch 메서드에서만 활용 가능

#### `cache: 'no-store` : default 옵션

```ts
fetch('https://api...', { cache: 'no-store' });
```

- 데이터 페칭의 결과를 저장하지 않는 옵션
- 요청마다 항상 네트워크에서 최신 데이터 fetch.

#### `cache: 'force-cache`

```ts
fetch('https://api...', { cache: 'force-cache' });
```

- 요청의 결과를 무조건 캐싱함
- 한번 호출 된 이후에는 다시 호출하지 않음

#### `cache: 'reload`

```ts
// 네트워크 요청 후 캐시 업데이트
fetch('https://api...', { cache: 'reload' });
```

- 항상 네트워크에서 최신 데이터를 가져오고, 가져온 데이터로 캐시를 업데이트 (지원)
- `force-cache`와 default 옵션(`no-store`) 위주로 사용

#### ✅ `next.revalidate` : 시간 기반 재검증

```ts
fetch('https://api...', { next: { revalidate: 600 } }); // 10분마다 재검증
```

- `number`: (초 단위 TTL) 특정 시간이 지난 후 백그라운드에서 자동 revalidation.
- `0`: 캐시 하지 않고, SSR처럼 매 요청마다 fetch.
- `false`: 캐시 무기한 유지

#### ✅ 태그 기반 무효화

```ts
fetch('https://api...', { next: { tags: ['user', 'posts'] } });
revalidateTag('posts'); // 관련 cache 한 번에 무효화
```

- 캐시 항목에 태그 지정 → revalidateTag()로 그룹 무효화 가능.

#### ✅ 경로 기반 무효화

```ts
revalidatePath('/dashboard/post/123');
```

- 경로 단위 캐시 무효화 (Full Route Cache 포함)

---

## 3. 🧩 외부 라이브러리와 성능 비교

| 항목                  | Next.js `fetch` 캐시        | `unstable_cache`                      | React Query / SWR 등 외부 라이브러리   |
| --------------------- | --------------------------- | ------------------------------------- | -------------------------------------- |
| **스코프**            | fetch 단위 캐시             | 함수 호출 단위 전역 캐시              | 컴포넌트 단위 클라이언트 캐시          |
| **갱신 방식**         | 시간 기반 (`revalidate`)    | 시간 기반 + 태그 이벤트 기반          | `staleTime`, `cacheTime`, 수동 갱신 등 |
| **구현 복잡도**       | 간단: 옵션으로 제어         | 약간 복잡: 태그/키 설정 필요          | 상대적으로 코드 복잡 (쿼리 관리 등)    |
| **서버 성능 최적화**  | JSON fetch 중복 제거        | DB 쿼리 등 추상 함수 캐시 가능        | 서버와 클라이언트 양쪽 지원 가능       |
| **클라이언트 지원**   | 없음                        | 없음                                  | CSR에서 뛰어난 UX / 자동 배경 동기화   |
| **스트리밍/SSR 통합** | Server Components 내 자동됨 | 동일                                  | SSR 일부 지원, but 설정 필요           |
| **적합한 usecase**    | API 데이터 캐싱, ISR 적용   | DB 결과, 서버 로직 캐싱               | 사용자 인터랙션 중심 데이터, UI 갱신   |
| **단점 요약**         | client-state 로직 부재      | unstable API & invalidation 설계 필요 | 외부 의존성, 빌드 크기 증가 가능       |

- **기본 캐시**: `fetch(..., { cache, next.revalidate })` 로 간편한 설정
- **정밀 캐시**: `revalidateTag`, `revalidatePath` 활용
- **함수 캐시**: `unstable_cache` 로 DB/로직 반복 방지
- **고급 UX**: 사용자 중심 상태/로딩/에러 제어는 React Query / SWR(right layer)

> ### 인용
>
> - [한 입 크기로 잘라먹는 Next.js(v15) 강의 | 이정환 Winterlood](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)
> - [Data Fetching, Caching, and Revalidating - Next.js](https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
> - [How to Cache in React and Next.js Apps with Best Practices for 2025 - Medium](https://medium.com/@jigsz6391/caching-in-react-and-next-js-with-best-practices-for-2025-477729cfe5a4)
> - [NextJS 14 - Cache not revalidating on Vercel servers - Stack Overflow](https://stackoverflow.com/questions/78198681/nextjs-14-cache-not-revalidating-on-vercel-servers)
> - [Functions: unstable_cache - Next.js](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
