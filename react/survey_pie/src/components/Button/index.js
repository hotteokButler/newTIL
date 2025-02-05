import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

//렌더 조건이 복잡해지는 경우
/*
1. 함수 활용
ex)
function getColor(type1, type2) {
  if (type1 === 'PRIMARY') {
    return PRIMARY.BUTTON.DEFAULT.COLOR;
  } else if (type1 === 'SECONDARY') {
    return PRIMARY.BUTTON.DEFAULT.COLOR;
  }
}
  const Button = styled.button`
  padding: 1rem 1.5rem;
  margin-right: 0.5rem;
  width: 200px;
  color: ${({ type }) => getColor(type)};
  background: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
  font-weight: bold;
  border-radius: 0.3rem;
  font-size: 1.15rem;
  cursor: pointer;
`;
 */

// 2. Map 활용 ****!

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

export const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  margin-right: 0.5rem;
  width: 200px;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  font-weight: bold;
  border-radius: 0.3rem;
  font-size: 1.15rem;
  cursor: pointer;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${colorMap[type].BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.DISABLED.BORDER}`
        : 'none'};
    cursor: default;
  }
`;

export default Button;
