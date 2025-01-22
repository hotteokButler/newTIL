import * as S from './selectInput.styled';

export default function Item({ children, onChange }) {
  return (
    <S.ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} value={children} />
        <button type="button"></button>
        <span>{children}</span>
      </label>
    </S.ItemWrapper>
  );
}
