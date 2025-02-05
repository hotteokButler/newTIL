import Item from './Item';

export default function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, idx) => {
    if (isChecked) {
      const max = options?.max || 1;

      if (answer.length >= max) return; // 선택 가능 옵션 크기보다 같을 경우 더 이상 선택되지 못하게 return;
      // setAnswer(idex 추가)
      setAnswer([...answer, idx]);
    } else {
      // setAnswer(idex 제외)
      setAnswer(answer.filter((item) => item !== idx));
    }
  };

  return (
    <div>
      {options?.items &&
        options.items.map((elem, idx) => (
          <Item
            key={idx}
            checked={answer.includes(idx)}
            onChange={(e) => handleChange(e.target.checked, idx)}
          >
            {elem}
          </Item>
        ))}
    </div>
  );
}
