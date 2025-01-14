export default function TextInput({ answer, setAnswer }) {
  return (
    <input
      type="text"
      name=""
      id=""
      value={answer ? answer : ''} // answer 없으면 공백 처리 필요 => 렌더링 이슈 발생
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
}
