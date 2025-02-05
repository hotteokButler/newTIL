import * as S from './selectInput.styled';

export default function TextInput({ answer, setAnswer, options }) {
  return (
    <S.TextInput
      type="text"
      name=""
      id=""
      placeholder={options.placeholder ? options.placeholder : ''}
      value={answer ? answer : ''} // answer 없으면 공백 처리 필요 => 렌더링 이슈 발생
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      {...(options?.max && { maxLength: options.max })}
      /* props를 조전에 맞춰서 전달할 때 유용함 2가지 방법
        1. {...(options?.max && { maxLength: options.max })}  -> true 일때면 추가 
        2. {...(options?.max ?? { maxLength: options.max })}  -> null또는 undefined일때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환
      */
    />
  );
}
