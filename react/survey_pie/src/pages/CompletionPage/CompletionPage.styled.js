import styled from 'styled-components';

import Button from '../../components/Button';

export const CompletionPageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100%;
  padding: 5% 0 2%;
`;
export const CompletionPageInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const CompletionImgCon = styled.div`
  img {
    display: block;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
  }
`;

export const CompletionMidText = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const ReloadButton = styled(Button)`
  width: 250px;
  margin: 1rem auto;
  svg {
    vertical-align: top;
  }
`;
