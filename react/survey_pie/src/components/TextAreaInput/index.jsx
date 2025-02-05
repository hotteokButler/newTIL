import * as S from './textAreaInput.styled';

export default function TextAreaInput({ answer, setAnswer, options }) {
  return (
    <S.TextAreaInput
      type="text"
      name=""
      id=""
      placeholder={options.placeholder ? options.placeholder : ''}
      value={answer ? answer : ''} // answer 없으면 공백 처리 필요 => 렌더링 이슈 발생
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      {...(options?.max && { maxLength: options.max })}
    />
  );
}
