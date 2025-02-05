import { useRef } from 'react';

import * as S from './selectInput.styled';

export default function Item({ children, checked, onChange }) {
  const checkboxRef = useRef(null);

  const handleButtonClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.click(); // input 체크박스 클릭 이벤트 발생
    }
  };

  return (
    <S.ItemWrapper>
      <label>
        <input
          ref={checkboxRef}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          value={children}
        />
        <button type="button" onClick={handleButtonClick}></button>
        <span>{children}</span>
      </label>
    </S.ItemWrapper>
  );
}
