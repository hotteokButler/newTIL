import * as S from './selectInput.styled';

export default function Item({ children, checked, onChange }) {
  return (
    <S.ItemWrapper>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          value={children}
        />
        <button type="button"></button>
        <span>{children}</span>
      </label>
    </S.ItemWrapper>
  );
}
