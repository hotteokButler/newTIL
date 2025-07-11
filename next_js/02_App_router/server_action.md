## 서버 액션 (Server Actions)

- 브라우저에서 호출할 수 있는 서버에서 실행되는 비동기 함수
- "use server"라는 지시자로 사용함
- 서버에서만 실행할 수 있는 다양한 동작을 자유롭게 수행 가능

```tsx
export default function Page() {
  const saveName = asnyc (formData: FormData) => {
    "use server"; // 서버 액션 지시자 => Next.Js 서버에서만 실행됨
    //1. 전달받은 form 데이터로부터 현재 사용자 입력 값 가져와 특정 함수를 실행시켜 DB에 데이터 직접 저장 가능
    const name = formData.get("name");
    await saveDB({name: name});
    //2. SQL문 직접 실행해서 데이터 추가 가능
    await sql`INSERT INOT Names (name) VALUES (${name})`;
  }
  return (
    <form action={saveName}>
      <input name="name" />
      <button type="submit">제출</button>
    </form>
  )
}
```
