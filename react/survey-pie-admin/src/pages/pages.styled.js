import styled from 'styled-components';

export const ListDeleteButton = styled.button`
  border: 1px solid #ff6161;
  padding: 0.7em 0.8em;
  border-radius: 50%;
  color: #ff6161;
  cursor: pointer;
  &:hover {
    background: #ff6161;
    color: #fff;
  }
`;
export const ListAddButtonWrap = styled.div`
  padding: 1rem;
  text-align: right;
`;

export const ListAddButton = styled.button`
  display: inline-block;
  border: 1px solid #0ed767;
  padding: 0.7em 0.8em;
  border-radius: 0.2rem;
  color: #0ed767;
  background: #fff;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-align: center;
  &:hover {
    background: #0e954a;
    color: #fff;
  }
`;
