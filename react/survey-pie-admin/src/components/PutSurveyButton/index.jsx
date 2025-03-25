import { FileAddFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import putSurvey from '../../services/putSurvey';

function PutSurveyButton() {
  const survey = useSelector((state) => state.survey.data); // store loading 구독

  if (!survey) return null;

  return (
    <FloatingButton>
      <button type="button" onClick={() => putSurvey(survey)}>
        <FileAddFilled />
        저장
      </button>
    </FloatingButton>
  );
}

export default PutSurveyButton;

const FloatingButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  z-index: 9;
  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: #e5ebf3;
    padding: 0.7rem 1rem;
    border-radius: 0.2rem;
    font-size: 1.2em;
    font-weight: bold;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
      background: #006ac0;
      color: #fff;
      transform: translateY(-10px);
    }
    span {
      margin-right: 4px;
    }
  }
`;
