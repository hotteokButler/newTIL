# Full Route Cache

- Next 서버측에서 빌드 타임에 특정 페이지의 렌더링 결과를 캐싱하는 기능

```text
              [    Next server                                                               ] [ 백엔드 서버 ]
              [[풀 라우트 캐시]       ~사전 렌더링~        [ Req memoization]]  [ 데이터 캐시]

//~~~~ 빌드타임 ~~~~//
[/page] ---------------------------→ [fetch(`/api/A`)] -----------→ [ miss ] -→ | → [ skip ] → |
[html] ←--------- [set] --- | --------------------------------------- [set]  ←-----------------|
//~~~~ 빌드타임 ~~~~//


[접속요청] -----→ [hit]
[html] ←----------------------|

```

> #### ((**서버 컴포넌트만 해당, 클라이언트 컴포넌트는 페이지 유형에 영향을 미치지 않는다!**))
>
> - `Dynamic Page`로 설정되는 기준
>
>   - 1. 특정 페이지가 접속 요청을 받을 때 마다 매번 변화가 생기거나, 데이터가 달라지늘 경우 <br/>
>        즉, 캐시되지 않는 Data Fetching을 사용하는 경우. => cache 옵션이 `no-store`로 되어 있을 경우
>   - 2. 동적 함수(쿠키, 헤더, 쿼리스트링)을 사용하는 컴포넌트가 있을 때 -> 시간에 따라서
>
>        ```js
>        asnyc function Component({searchParams} : {searchParams : { q : string}}) {
>                 //쿠키
>                 const cookieStore = cookies();
>                 const theme = cookieStore.get('theme');
>                 //헤더
>                 const headerslist = headers();
>                 const auth = headersList.get('authorization')
>                 //쿼리스트링
>                 const q = searchParams.q;
>
>                 return ...
>               }
>
>        ```
>
> - `Static Page`로 설정되는 기준
>
>   - 1.  Dynamic Page가 아니라면 모두 Static Page가 됨 - default
>
>   | 동적 함수 | Data Cache | 페이지 분류  | Full Route Cache 적용 유무 |
>   | --------- | ---------- | ------------ | -------------------------- |
>   | ✅        | 🚫         | Dynamic Page | 🚫                         |
>   | ✅        | ✅         | Dynamic Page | 🚫                         |
>   | 🚫        | 🚫         | Dynamic Page | 🚫                         |
>   | 🚫        | ✅         | Static Page  | ✅                         |
>
> - `revalidate` option이 옵션이 붙게 되는 경우 해당 지정 시간이 지나면 새로 Data 캐싱이 일어나므로 풀라우트 캐시안의 페이지는 stale한 데이터가 되어 지정 시간마다 새로 set 된다 -> page router의 ISR 방식과 유사
