# Parallel Route (페러랠 라우트) = 병렬 라우트

- Parallel Routes는 같은 레이아웃 내에서 여러 페이지를 동시 혹은 조건부로 렌더링할 수 있는 패턴. 특히 대시보드, 피드, 모달 등 동적 섹션에서 유용
- 소셜 미디어 서비스 또는 관리자 대시보드처럼 복잡한 구조로 이루어져 있는 서비스들을 구축하는데 유용함

## 1. `slot` 생성

- `slot(슬롯)` 병렬로 렌더링 될 페이지 컴포넌트를 보관하는 폴더
- 해당 슬롯 아래의 page 컴포넌트는 부모 레이아웃 컴포넌트에게 자동으로 props로 전달됨

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
