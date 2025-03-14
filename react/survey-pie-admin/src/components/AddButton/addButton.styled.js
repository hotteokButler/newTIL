import styled from 'styled-components';

export const AddButtonWrapper = styled.button`
  font-size: 2.5rem;
  border-radius: 50%;
  background: #001628;
  color: #e5ebf3;
  cursor: pointer;
  transition: 0.4s;
  display: block;
  text-align: center;
  margin: 1em auto;
  &:hover {
    color: #fff;
    background: #2f75d3;
    transform: rotate(90deg);
  }
  span {
    padding: 0.32em 0.2em;
  }
`;

export const PopoverButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  button {
    background: #afc5e0;
    border-radius: 0.2rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #215eba;
    }
  }
`;
