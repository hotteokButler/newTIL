import styled from 'styled-components';

export const TextInput = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0.8rem 1.5rem 0.7rem;
  line-height: 1.6em;

  &::placeholder {
    color: #d8d7d7;
  }
`;

// options
export const ItemWrapper = styled.div`
  margin: 1.15rem 0;
  label {
    display: flex;
    align-items: center;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked ~ button {
    border: 0.6em solid #53e994;
  }
  input[type='checkbox']:checked ~ span {
    font-weight: bold;
  }
  button {
    display: inline-block;
    margin-right: 0.6rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.2em solid #e2dfdf;
    cursor: pointer;
  }
  span {
    flex: 0.5;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
