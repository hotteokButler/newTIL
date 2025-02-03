import styled from 'styled-components';

export const PageWarpper = styled.div`
  position: relative;
  width: 90%;
  max-width: 1024px;
  min-height: 550px;
  padding: 6% 10%;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 0.7rem;
  background: #fff;
`;

export const SurveyTitle = styled.h1`
  position: relative;
  font-size: 1.8rem;
  &::after {
    clear: both;
    content: 'Q.';
    position: absolute;
    font-weight: 900;
    font-size: 1.5rem;
    top: 0.18em;
    left: -1.4em;
  }
`;

export const SurveyDesc = styled.h4`
  font-weight: 400;
  text-indent: 0.3em;
`;
