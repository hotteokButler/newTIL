export default function TextInput({ answer, setAnswer }) {
  return (
    <input
      type="text"
      name=""
      id=""
      value={answer ? answer : ''}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
}
