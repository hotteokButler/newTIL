import styled from 'styled-components';

export const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #fff;
`;

export const OptionTitle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  background: #7e8ea7;
  color: #fff;
  padding: 1em 0;
  text-align: center;
`;

export const OptionCon = styled.div`
  padding: 0.5em;
`;

export const NoQuestion = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #dcbfbf;
`;

export const FormWrapper = styled.div`
  padding: 1em;
`;

export const FormCon = styled.div``;
export const FormSubTitle = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  padding: 0 0 1em;
`;
export const ItemWrapper = styled.div`
  padding: 0 0 2em;
  min-height: 85px;
`;

export const SubmitButton = styled.div`
  margin: 5em 0 2em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 80px;
  button {
    padding: 0.7em 1.2em;
    background: #7e8da7;
    border-radius: 0.2rem;
    font-size: 1.1em;
    font-weight: bold;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #004fd9;
    }
  }
`;
