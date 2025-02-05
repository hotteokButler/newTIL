import styled from 'styled-components';

export const ProgressIndicatorWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + 1rem);
  left: 0%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

// $status = 'pending' | 'in-progress' | 'done'
export const Bar = styled.div`
  height: 0.5rem;
  width: 120px;
  border-radius: 1rem;

  background: ${({ $status }) => {
    if ($status === 'pending') return '#ddd';
    if ($status === 'in-progress') return '#53e994';
    if ($status === 'done') return '#acebc7';
  }};
`;

export const PageCounter = styled.div`
  padding-left: 0.5rem;
  color: #636363;
  font-size: 0.85rem;

  span {
    color: #333;
    font-weight: bold;
  }
`;
