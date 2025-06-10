## 📚 App Router의 Layout System 개념 정리

### ✅ 1. Layout이란?

- `layout.tsx` 또는 `layout.js` 파일을 통해 정의
- **페이지 간 전환 시 유지되는 UI 구조**를 정의 (예: 헤더, 사이드바, 푸터 등)
- 계층적으로 중첩되며 **중첩 라우팅(Nested Routing)** 구조를 반영

```tsx
// 예: app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Sidebar />
			<main>{children}</main>
		</div>
	);
}
```

- `children`은 해당 layout이 감싸는 하위 페이지 또는 하위 레이아웃을 의미

### ✅ 2. 구조 및 동작 방식

```plaintext
app/
├─ layout.tsx        (최상위 공통 레이아웃)
├─ page.tsx          (루트 페이지)
├─ about/
│  ├─ layout.tsx     (about 전용 레이아웃)
│  ├─ page.tsx       (about 페이지)
├─ dashboard/
│  ├─ layout.tsx     (dashboard 전용 레이아웃)
│  ├─ analytics/
│  │  ├─ page.tsx    (dashboard/analytics 페이지)
```

- 위 구조에서:

  - `/about`은 `root layout → about layout → about page` 순으로 렌더링됨
  - `/dashboard/analytics`는 `root layout → dashboard layout → analytics page`로 렌더링됨

### ✅ 3. layout의 특징

| 항목                      | 설명                                                                |
| ------------------------- | ------------------------------------------------------------------- |
| **재사용**                | 여러 페이지에서 공통으로 사용 가능 (ex. header/sidebar)             |
| **상태 유지**             | 레이아웃 내부 컴포넌트는 페이지 이동 간 **unmount되지 않음**        |
| **중첩 가능**             | 폴더 구조에 따라 여러 단계의 레이아웃 중첩 구성 가능                |
| **비동기 지원**           | `async` 함수로 정의 가능 → 데이터 prefetch 등 가능                  |
| **에러/로딩 핸들링 연계** | `error.tsx`, `loading.tsx`와 결합하여 구간별 로딩 및 에러 처리 가능 |

### ✅ 4. 관련 파일 역할 정리

| 파일명          | 설명                                        |
| --------------- | ------------------------------------------- |
| `layout.tsx`    | 해당 경로의 공통 레이아웃 정의              |
| `page.tsx`      | 실제 렌더링되는 페이지                      |
| `loading.tsx`   | 해당 레이아웃 또는 페이지 로딩 중 보여줄 UI |
| `error.tsx`     | 해당 경로에서 발생하는 에러 핸들링 UI       |
| `not-found.tsx` | 404 Not Found 페이지 구성용                 |

### ✅ 5. 예시 시각화

```plaintext
URL: /dashboard/analytics

렌더링 구조:
Root Layout (app/layout.tsx)
 └─ Dashboard Layout (app/dashboard/layout.tsx)
     └─ Analytics Page (app/dashboard/analytics/page.tsx)
```

### ✅ 6. 참고 공식문서 링크

- [Routing: Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Layout 구성 및 중첩](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)
