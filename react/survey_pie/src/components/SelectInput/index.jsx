import Item from './Item';

export default function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, idx) => {
    if (isChecked) {
      // setAnser(idex 추가)
      setAnswer([...answer, idx]);
    } else {
      // setAnser(idex 제외)
      setAnswer(answer.filter((item) => item !== idx));
    }
  };

  return (
    <div>
      {options?.items &&
        options.items.map((elem, idx) => (
          <Item key={idx} onChange={(e) => handleChange(e.target.checked, idx)}>
            {elem}
          </Item>
        ))}
    </div>
  );
}
