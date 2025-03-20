import styled from 'styled-components';

// SwitchWrapper: 스위치의 외부 래퍼
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 28px;
  border-radius: 50px;
  background-color: ${({ $isChecked }) => ($isChecked ? '#1677ff' : '#d1e0f0')};
  position: relative;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $isChecked }) =>
    $isChecked ? '0 1px 9px rgba(0, 123, 255, 0.3)' : 'none'};
`;

// SwitchBall: 스위치의 동그란 버튼
export const SwitchBall = styled.div`
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ $isChecked }) => ($isChecked ? 'calc(100% - 24px)' : '2px')};
  transition: left 0.3s ease;
`;
