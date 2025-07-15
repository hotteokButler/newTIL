# Parallel Route (페러랠 라우트) = 병렬 라우트

- Parallel Routes는 같은 레이아웃 내에서 **여러 페이지**를 동시 혹은 조건부로 렌더링할 수 있는 패턴. 특히 대시보드, 피드, 모달 등 동적 섹션에서 유용
- 소셜 미디어 서비스 또는 관리자 대시보드처럼 복잡한 구조로 이루어져 있는 서비스들을 구축하는데 유용함

## 1. `slot` 생성

- `slot(슬롯)` 병렬로 렌더링 될 페이지 컴포넌트를 보관하는 폴더
- 해당 슬롯 아래의 page 컴포넌트는 부모 레이아웃 컴포넌트에게 자동으로 props로 전달됨
- 해당 슬롯 폴더는 브라우저 경로에 반영되지 않음
- 갯수 제한이 없다
- 슬롯 아래 새로운 페이지 추가 가능
  - 즉, 기존 페이지는 유지한 채 해당 슬롯 내부 page 변경됨
  - 다른 슬롯이 존재한다면 전달될 페이지 컴포넌트가 없으므로 이전 페이지가 유지됨
    - `(주의)` : 슬롯들이 이전 페이지를 유지하게 되는건 오직 **Link 컴포넌트**를 이용하여 **CSR**로 동작할 때만 한정, 거치지 않고 바로 접속 시 404에러 발생
      - 초기 접속으로인해 이전 페이지 렌더링이 없기 때문에 슬롯의 이전값을 알 수 없다
      - 슬롯별로 이전 값을 찾을 수 없을 시 대신 렌더링 할때 `default.tsx`를 활용한다

```
/app
   /parallel
       /@sidebar
          page.tsx
       layout.tsx
       page.tsx

```

## 2.상위 컴포넌트의 레이아웃에 슬롯이 props로 전달됨

```tsx
//layout.tsx
export default function Layout({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) {
	return (
		<div>
			{sidebar}
			{children}
		</div>
	);
}
```
