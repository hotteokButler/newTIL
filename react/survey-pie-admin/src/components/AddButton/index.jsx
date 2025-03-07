import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ onClick }) {
  return (
    <AddButtonWrapper type="button" onClick={onClick}>
      <PlusCircleOutlined />
    </AddButtonWrapper>
  );
}

export default AddButton;

const AddButtonWrapper = styled.button`
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
